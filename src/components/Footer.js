import React from "react";

const Footer = () => {
  return (
    <div className= "bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 flex flex-wrap ">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold px-24 p-6">For a better experience, download the Swiggy app now</h1>
      </div>
      <div className="flex justify-center space-x-4 px-10 py-6">
        <a
          href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-52"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="Play Store"
          />
        </a>
        <a
          href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-48"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="App Store"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
