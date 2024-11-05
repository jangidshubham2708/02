import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100  min-h-screen py-12 px-6 shadow-xl">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Food Ordering App
        </h1>
        <p className="text-lg font-medium text-gray-700 mb-8">
          "Food Ordering App is my very first project, created to bring a
          seamless and modern food ordering experience to users. Built from the
          ground up with a passion for web development, I leveraged React,
          Redux, Tailwind, HTML5, and CSS3 to craft a responsive and dynamic
          single-page application (SPA). This project serves as a journey into
          learning and applying web development skills in a real-world
          scenario."
        </p>

        <div className="space-y-6 text-left cursor-pointer">
          {[
            {
              emoji: "🚀",
              title: "Modern Frontend with React",
              description: "Our platform is built using React, allowing for a dynamic and interactive web experience. Components are efficiently rendered, ensuring smooth performance and fast response times."
            },
            {
              emoji: "⚡",
              title: "Faster Navigation",
              description: "With an SPA, only necessary data is fetched when navigating between sections, resulting in quick transitions and reduced load times."
            },
            {
              emoji: "🔗",
              title: "Seamless API Integration",
              description: "Our app communicates with backend servers using APIs to fetch restaurant data and menus, ensuring that the content is always up-to-date."
            },
            {
              emoji: "🎨",
              title: "Tailwind CSS for Styling",
              description: "Utilizing Tailwind CSS enables rapid development of responsive layouts, making the app visually appealing on all devices."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
            >
              <span className="text-3xl text-purple-600">{item.emoji}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
