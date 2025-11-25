import { useState } from 'react';
import VideoVR from './components/VideoVR';

function App() {
  const [videoSrc, setVideoSrc] = useState('/eagle-360.mp4');

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">VideoJS VR React Wrapper</h1>

      <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-slate-700">
        <VideoVR
          src={videoSrc}
          type="video/mp4"
          options={{
            autoplay: false,
            controls: true,
            fluid: true,
          }}
          vrOptions={{
            projection: '360',
            debug: true,
            forceCardboard: false,
          }}
        />
      </div>

      <div className="mt-8 p-4 bg-slate-800 rounded-lg max-w-2xl w-full">
        <h2 className="text-xl font-semibold mb-4">Controls</h2>
        <p className="mb-2 text-slate-300">
          Click and drag on the video to look around.
          On mobile, move your device to look around (gyroscope).
        </p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setVideoSrc('/eagle-360.mp4')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition-colors"
          >
            Load Eagle 360
          </button>
          <button
            onClick={() => setVideoSrc('https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv')}
            className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded transition-colors"
          >
            Load Standard Video (Test)
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
