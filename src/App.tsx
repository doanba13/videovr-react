import SuperappCard from './components/SuperappCard';
import VideoCard from './components/VideoCard';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 gap-8">
      <SuperappCard variant="default" />
      <SuperappCard variant="variant2" />
      <SuperappCard variant="variant3" />
      <VideoCard
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/c/c0/Mountain_landscape_4432242.jpg"
        title="Life in the countryside"
        views="161K Views"
      />
    </div>
  );
}

export default App;
