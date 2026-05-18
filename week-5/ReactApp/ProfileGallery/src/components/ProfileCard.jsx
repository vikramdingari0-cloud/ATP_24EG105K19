import React from 'react';

const ProfileCard = ({ data }) => {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={data.image} 
        alt={data.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="flex items-center gap-3 pt-4 border-t">
          <img 
            src={data.authorImg} 
            alt={data.author} 
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{data.author}</p>
            <p className="text-xs text-gray-500">{data.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
