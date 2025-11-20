import React from 'react';

interface VideoCardProps {
  imageUrl: string;
  title: string;
  views: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ imageUrl, title, views }) => {
  return (
    <div className="w-[255px] rounded-lg overflow-hidden bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[143px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text">
          {title}
        </h3>
        <p className="text-sm text-text-secondary">
          {views}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
