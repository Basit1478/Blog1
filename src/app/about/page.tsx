import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-8">About This Blog</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Welcome to My Blog!</h2>
          <p className="text-gray-700 mb-4">
            This blog is a space where I share my thoughts, experiences, and knowledge on a variety of topics. Whether its about technology, lifestyle, or personal growth, my goal is to provide content that inspires, educates, and entertains.
          </p>
          <p className="text-gray-700 mb-4">
            I believe in the power of words and stories to connect people. Through this blog, I hope to build a community of like-minded individuals who are passionate about learning and growing together.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">About the Author</h2>
          <p className="text-gray-700 mb-4">
            Hi, I am Basit Ali, the creator of this blog. I am a Graphic Designer & <span className="font-bold">GIAIC</span> student to learn AI and full stack developing .
             and this blog is my way of sharing that passion with others.
          </p>
          <p className="text-gray-700">
            When I am not writing, you can find me social media . Feel free to reach out if you did like to connect or discuss any of my posts.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutPage;
