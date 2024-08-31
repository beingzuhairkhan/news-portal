import React from 'react';

const EverythingCard = ({ title, description, imgUrl, publishedAt, url, author, source }) => {
  return (
    <div className="mt-20 h-auto md:h-[500px] text-justify p-4 ">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-full md:max-w-sm rounded overflow-hidden shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
      >
        
        <img
          className="w-full h-64 md:h-48 object-cover"
          src={imgUrl}
          alt="img"
        />

        
        <div className="px-4 py-4 md:px-6 md:py-4">
          <div className="font-bold text-lg md:text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-sm md:text-base">
            {description?.substring(0, 200)}{description?.length > 200 ? '...' : ''}
          </p>
        </div>

      
        <div className="px-4 pt-2 pb-4 md:px-6 md:pt-4 md:pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2">
            Author: {author || 'Unknown Author'}
          </span>
          <span className=" mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700">
            Source: {source}
          </span>
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
      </a>
    </div>
  );
};

export default EverythingCard;
