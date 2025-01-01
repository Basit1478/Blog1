
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <Navbar/>
  <div className="min-h-screen p-6 bg-gradient-to-r from-gray-50 to-gray-100">
    <div className="max-w-screen-lg mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              alt="How I Would Learn To Code Today, if I Could Start All Overs"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic.webp"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
              How I Would Learn To Code Today, if I Could Start All Overs
            </h2>
            <p className="text-gray-600 mb-4">
              I’ve been building websites since 1998, and a lot has changed.
              Here’s how I would learn to code today,
            </p>
            <a className="text-blue-500 hover:underline" href="/latest/learn-code-today">
              Read more
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
              alt="  The Benefits of Using TypeScript"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic2.avif"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
            The Benefits of Using TypeScript
            </h2>
            <p className="text-gray-600 mb-4">
            TypeScript is a free and open-source high-level programming language developed 
            by Microsoft that adds a rich type system to JavaScript.
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/latest/benefits-typescript"
            >
              Read more
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
              alt="Tailwind CSS for Modern UI Design"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic3.jpg"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
            Tailwind CSS for Modern UI Design
            </h2>
            <p className="text-gray-600 mb-4">
            About eight months ago we open-sourced our 
            progress on Tailwind CSS v4.0.
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/latest/modern-ui-design-tailwand-css"
            >
              Read more
            </a>
          </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default page;
