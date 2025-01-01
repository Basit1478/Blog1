
import React from "react";
import Image from 'next/image'
const blog = () => {
  return (
    <div>
      
      <div className="max-w-screen-lg mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-6">New Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              alt="   How I Would Learn To Code Today, if I Could Start All Overs"
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
              
            </p>
            <a className="text-blue-500 hover:underline" href="/latest/learn-code-today">
              Read more
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              alt="The Future of Work in a Digital Era"
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
            by Microsoft.
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
            About eight months ago we 
            <br /> open-sourced our progress on <br /> Tailwind CSS v4.0.
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
      <div className="max-w-screen-lg mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-6">New Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              alt="   How I Would Learn To Code Today, if I Could Start All Overs"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic4.png"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
            How to Create a Morning Routine That Sets You Up for Success
            </h2>
            <p className="text-gray-600 mb-4">
            ​Your morning routine sets the tone for the rest of your day...
           
              
            </p>
            <a className="text-blue-500 hover:underline" href="/new/morning-life-routine">
              Read more
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              alt=""
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic5.jpg"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
            Fitness at Home: 5 Simple Exercises
            </h2>
            <p className="text-gray-600 mb-4">
            Daily physical activity and exercise is a staple of a balanced healthy lifestyle.
            As one of the seven  pillars of lifestyle...
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/new/simple-workout"
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
              src="/images/pic6.webp"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
           Top 10 Underrated Travel Destinations for 2025
            </h2>
            <p className="text-gray-600 mb-4">
            Travel enthusiasts often flock to well-known destinations.
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/new/underrated-destinations"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Informative Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
              alt="How to Save for Your Dream Vacation Without Breaking the Bank"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic7.jpg"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
            How to Save for Your Dream Vacation Without Breaking the Bank
            </h2>
            <p className="text-gray-600 mb-4">
              A beginner's guide to AI and machine learning technologies.
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/informative/save-your-dream"
            >
              Read more
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
              alt=" Top 5 Platforms for Learning New Skills Online"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic8.jpg"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
            Top 5 Platforms for Learning New Skills Online
            </h2>
            <p className="text-gray-600 mb-4">
            Beyond being your go-to email marketing tool, 
            GetResponse offers a dedicated knowledge 
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/informative/top-5-online-platforms"
            >
              Read more
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
              alt="10 Easy Ways to Make Your Life More Sustainable"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic9.png"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2">
            10 Easy Ways to Make Your Life More Sustainable
            </h2>
            <p className="text-gray-600 mb-4">
            Sustainability has become an increasingly important concept in recent years
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/informative/top-10-easy-ways"
            >
              Read more
            </a>
          </div>
        </div>
        </div>
    </div>
  );
};

export default blog;
