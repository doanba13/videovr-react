import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-vr/dist/videojs-vr.css';
// import 'videojs-vr'; // This might be tree-shaken or not attaching correctly
import type { VideoJsVRPluginOptions } from 'videojs-vr';

// Ensure videojs-vr is loaded
// We use a side-effect import for the plugin
import 'videojs-vr';

interface VideoVRProps {
    src: string;
    type?: string;
    projection?: string; // Content projection (e.g., '360', '180', '360_CUBE')
    options?: any; // videojs.PlayerOptions might not be exported or named differently
    vrOptions?: VideoJsVRPluginOptions;
    onReady?: (player: videojs.Player) => void;
}

export const VideoVR: React.FC<VideoVRProps> = ({
    src,
    type = 'video/mp4',
    projection,
    options,
    vrOptions,
    onReady,
}) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<videojs.Player | null>(null);

    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");
            videoElement.classList.add('vjs-big-play-centered');
            (videoElement as any).crossOrigin = "anonymous";

            if (videoRef.current) {
                videoRef.current.appendChild(videoElement);
            }

            // Handle videojs import which might be a namespace or function depending on build
            const vjs = (videojs as any).default || videojs;

            if (typeof vjs !== 'function') {
                console.error('videojs is not a function', vjs);
                return;
            }

            console.log('Initializing Video.js player...');
            const player = (playerRef.current = vjs(videoElement, {
                ...options,
                controls: true,
                sources: [
                    {
                        src,
                        type,
                    },
                ],
            }, () => {
                vjs.log('player is ready');
                onReady && onReady(player);
            }));

            // Set projection in mediainfo as per videojs-vr examples
            if (projection) {
                (player as any).mediainfo = (player as any).mediainfo || {};
                (player as any).mediainfo.projection = projection;
            }

            console.log('Checking for VR plugin...');
            if (player.vr) {
                // Pass the projection directly to the plugin if provided, otherwise fallback to AUTO
                const pluginOptions = {
                    ...vrOptions,
                    projection: projection || 'AUTO'
                };
                console.log('VR plugin found, initializing with options:', pluginOptions);
                player.vr(pluginOptions);
            } else {
                console.error('videojs-vr plugin NOT found on player instance!');
            }
        } else {
            const player = playerRef.current;
            if (player) {
                // Update mediainfo projection when props change
                if (projection) {
                    (player as any).mediainfo = (player as any).mediainfo || {};
                    (player as any).mediainfo.projection = projection;
                }

                (player as any).src({ src, type });
            }
        }
    }, [options, videoRef, src, type, projection, vrOptions, onReady]);

    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !(player as any).isDisposed()) {
                (player as any).dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player>
            <div ref={videoRef} className="w-full h-full" />
        </div>
    );
};

export default VideoVR;
