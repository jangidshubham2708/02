import React from "react";
import backgroundImage from "./background@contact.jpg"
import instaLogo from "./insta logo.jpeg"

const Contact = () => {

  return (
    <div className="flex">
<div className="absolute w-screen  overflow-hidden opacity-30 ">
<img className="w-[2000]  h-[900]" src={backgroundImage} alt="Image" />
</div>
<div className=" relative z-10 pl-32 py-20 text-black text-xl font-serif font-extrabold text-center">
Need assistance? Our customer support team is ready to assist you. Don’t hesitate to reach out, and we’ll respond as quickly as possible. We aim to resolve your issues and enhance your experience with us
</div>
<div className="relative z-10">  
      <button
        onClick={() => {
          window.open("https://www.linkedin.com/in/shubham-kumar-jangid-99b20a29a/", "_blank");
        }}
      >
       LinkedIn
      </button>
</div>
<div className="relative z-10">
<div className="relative z-10 mb-4">
        <a href="https://www.instagram.com/shubhuu.js/" className="inline-block">
          <img
            src={instaLogo}
            alt="InstaLogo"
            className="w-16 h-16 hover:scale-105 transition-transform" 
          />
        </a>
      </div>
      <div className="relative z-10">
        <button
      onClick={() => {
        window.open("https://wa.me/9887558883","_blank");
      }}
      >
       WhatsApp
       </button>
    </div>
    <div className="relative z-10 mb-4">
        <a href="mailto:shubhamj8168@gmail.com" className="inline-block">
          <img
            src="https://pngimg.com/d/email_PNG11.png"
            alt="Email Icon"
            className="w-16 h-16 hover:scale-105 transition-transform" 
          />
        </a>
      </div>
      </div>
</div>
  );
};

export default Contact;
