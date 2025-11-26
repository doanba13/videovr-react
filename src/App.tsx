import { useState } from 'react';
import VideoVR from './components/VideoVR';

const videos = [
  { name: 'LCS15 EAC', src: 'https://raw.githubusercontent.com/videojs/videojs-vr/main/samples/lcs15_eac.webm', type: 'video/webm', projection: 'EAC' },
  { name: 'LCS15 Rect', src: 'https://raw.githubusercontent.com/videojs/videojs-vr/main/samples/lcs15_rect.webm', type: 'video/webm', projection: '360' },
  { name: 'Video 180', src: 'https://raw.githubusercontent.com/videojs/videojs-vr/main/samples/video_180.mp4', type: 'video/mp4', projection: '180' },
  { name: 'Video 180 Left Eye', src: 'https://raw.githubusercontent.com/videojs/videojs-vr/main/samples/video_180_lefteyeonly.mp4', type: 'video/mp4', projection: '180_MONO' },
];

function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">VideoJS VR React Wrapper</h1>

      <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-slate-700">
        <VideoVR
          key={currentVideo.src} // Force remount when video changes to ensure correct projection
          src={currentVideo.src}
          type={currentVideo.type}
          projection={currentVideo.projection}
          options={{
            autoplay: false,
            controls: true,
            fluid: true,
          }}
          vrOptions={{
            debug: true,
            forceCardboard: false,
          }}
        />
      </div>

      <div className="mt-8 p-4 bg-slate-800 rounded-lg max-w-4xl w-full">
        <h2 className="text-xl font-semibold mb-4">Select Video</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((video) => (
            <button
              key={video.name}
              onClick={() => setCurrentVideo(video)}
              className={`px-4 py-2 rounded transition-colors text-sm font-medium ${currentVideo.name === video.name
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                }`}
            >
              {video.name}
            </button>
          ))}
        </div>
        <div className="mt-4 text-sm text-slate-400">
          <p>Current Projection: <span className="font-mono text-blue-400">{currentVideo.projection}</span></p>
          <p>Source: <span className="font-mono text-slate-500">{currentVideo.src}</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
