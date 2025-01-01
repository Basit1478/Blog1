import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from "next/image";
const page = () => {
  return (
    <div>
      <Navbar/>
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
             alt="Background image"
             className="w-full h-auto rounded-md shadow-md mb-6"
             width={800}
             height={400}
             loading="eager"
             role="presentation"
             src="/images/pic9.png"
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
        <Footer/>
    </div>
  )
}

export default page
