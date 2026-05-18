import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4 hover:bg-gray-50 transition-colors">
      <img 
        src={user.image} 
        alt={user.name} 
        className="w-16 h-16 rounded-full border"
      />
      <div>
        <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
        <p className="text-gray-600 text-sm">{user.email}</p>
        <button className="mt-2 text-blue-600 text-sm font-semibold hover:underline">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
