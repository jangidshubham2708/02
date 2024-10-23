import React from "react";

const About = () => {
  const whatsappNumber = "+919887558883";
  return (
    <div>
      <h1 className="">Shubham Kuamr jangid</h1>
      <h2>Currently I am pursuing my Master of Computer Applications degree from Vivekananda Global University, Jaipur . I am a highly motivated and enthusiast as web developer with a passion for creating innovative and user-friendly websites. I am also proficient in using various web development frameworks and tools [JavaScript,REACT.js,Tailwind.css,CSS,HTML]
      I am eager to start my career as a web developer and I am looking for a challenging and rewarding position where I can use my skills and experience to make a positive impact.</h2>
      <button
        onClick={() => {
          window.open("https://www.linkedin.com/in/shubham-kumar-jangid-99b20a29a/", "_blank");
        }}
      >
       LinkedIn
      </button>
      <button
        onClick={() => {
          window.open("https://www.instagram.com/shubhuu.js/", "_blank");
        }}
      >
       Instagram
      </button>
    </div>
  );
};

export default About;
