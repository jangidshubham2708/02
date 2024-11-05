import React from "react";
import { FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen py-12 px-6 shadow-xl">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg font-medium text-gray-600 mb-8">
          Reach out to us for support, questions, or any assistance you may need. We're here to help!
        </p>

        <div className="space-y-6 text-left cursor-pointer ">
          <div className="flex items-start space-x-3 bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
            <FaLinkedin className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-gray-600">
                Connect with us on LinkedIn to stay updated with our latest developments.
              </p>
              <button
                onClick={() =>
                  window.open("https://www.linkedin.com/in/shubham-kumar-jangid-99b20a29a/", "_blank")
                }
                className="text-blue-600 hover:underline mt-2"
              >
                Visit LinkedIn
              </button>
            </div>
          </div>
          <div className="flex items-start space-x-3 bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
            <FaWhatsapp className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600">
                Chat with us on WhatsApp for quick support and assistance.
              </p>
              <button
                onClick={() => window.open("https://wa.me/9887558883", "_blank")}
                className="text-green-500 hover:underline mt-2"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
          <div className="flex items-start space-x-3 bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
            <FaInstagram className="text-pink-500 text-3xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
              <p className="text-gray-600">
                Follow us on Instagram for updates and community highlights.
              </p>
              <button
                onClick={() => window.open("https://www.instagram.com/shubhuu.js/", "_blank")}
                className="text-pink-500 hover:underline mt-2"
              >
                Visit Instagram
              </button>
            </div>
          </div>
          <div className="flex items-start space-x-3 bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
            <FaEnvelope className="text-red-500 text-3xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                Send us an email, and our team will get back to you as soon as possible.
              </p>
              <button
                onClick={() => window.open("mailto:shubhamj8168@gmail.com", "_blank")}
                className="text-red-500 hover:underline mt-2"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
