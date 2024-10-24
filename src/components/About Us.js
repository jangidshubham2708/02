import React from "react";

const About = () => {
  const whatsappNumber = "+919887558883";
  return (
    <div className="flex shadow-2xl bg-gray-100">
      <div>
      <div className="px-5 p-2 m-2 text-2xl font-bold ">
        Food Ordering App
        </div>
        <div className="">
        <div className="text-xl font-sans font-semibold p-7">
        "Food Ordering App is my very first project, created to bring a seamless and modern food ordering experience to users. Built from the ground up with a passion for web development, I leveraged React, Redux, Tailwind, HTML5, and CSS3 to craft a responsive and dynamic single-page application (SPA).This project serves as a journey into learning and applying web development skills in a real-world scenario. 
        "
        </div>
        </div>
        <div className="text-xl font-bold font-serif p-9">
       ➡️ Modern Frontend with React: Our platform is built using React, a powerful JavaScript library for building user interfaces. This allows us to create a dynamic and interactive web experience where components are efficiently rendered, ensuring smooth performance and fast response times.
        </div>
        <div className="text-xl font-bold font-serif p-9">
       ➡️ Faster Navigation: With an SPA, only the necessary data is fetched when navigating between different sections, resulting in quick transitions and reduced load times.
        </div>
        <div className=" text-xl font-bold font-serif p-9">
       ➡️ Seamless API Integration: Our app communicates with backend servers using APIs to fetch restaurant data, menus. This ensures that the content is always up-to-date and allows users to interact with the latest offerings from various food vendors
        </div>
        <div className="text-xl font-bold font-serif p-9">
       ➡️ Tailwind CSS for Styling: We utilize Tailwind CSS to style our application, providing a modern and clean design. Tailwind's utility-first approach enables rapid development of responsive layouts, making the app visually appealing on all devices, whether mobile, tablet, or desktop.
        </div>
      </div>
</div>
  );
};

export default About;
