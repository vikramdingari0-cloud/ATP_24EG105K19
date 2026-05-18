import React from 'react';
import ProfileCard from './components/ProfileCard';

const data = [
  {
    title: "News App",
    description: "A simple app to fetch news from an API.",
    author: "Mehul",
    date: "Aug 2020",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    title: "Blogging App",
    description: "My personal blog built with Angular.",
    author: "Mehul",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    title: "COVID Tracker",
    description: "A tracking app for COVID stats.",
    author: "Mehul",
    date: "Mar 2026",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

function App() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <ProfileCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
