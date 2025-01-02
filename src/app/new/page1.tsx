import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <Navbar />
        <div className="max-w-screen-lg mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-6">New Blogs</h1>
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
              src="/images/pic4.png"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2 text-black">
            How to Create a Morning Routine That Sets You Up for Success
            </h2>
            <p className="text-gray-600 mb-4">
            ​Your morning routine sets the tone for the rest of your day...
           
              
            </p>
            <a className="text-blue-500 hover:underline" href="/latest/morning-life-routine">
              Read more
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
           <Image
              alt="Fitness at Home: 5 Simple Exercises"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic5.jpg"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2 text-black">
            Fitness at Home: 5 Simple Exercises
            </h2>
            <p className="text-gray-600 mb-4">
            Daily physical activity and exercise is a staple of a balanced healthy lifestyle.
            As one of the seven  pillars of lifestyle...
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/latest/simple-workout"
            >
              Read more
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
             <Image
              alt="Top 10 Underrated Travel Destinations for 2025"
              loading="lazy"
              width={500}
              height={300}
              decoding="async"
              data-nimg={1}
              className="w-full h-48 object-cover rounded-md mb-4"
              src="/images/pic6.webp"
              style={{ color: "transparent" }}
            />
            <h2 className="text-xl font-semibold mb-2 text-black">
           Top 10 Underrated Travel Destinations for 2025
            </h2>
            <p className="text-gray-600 mb-4">
            Travel enthusiasts often flock to well-known destinations.
            </p>
            <a
              className="text-blue-500 hover:underline"
              href="/latest/underrated-destinations"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
