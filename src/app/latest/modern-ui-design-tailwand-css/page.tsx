import CommentSection from '@/components/CommentSection'
import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
       <div className="min-h-screen p-6 bg-gradient-to-r from-gray-50 to-gray-100">
    <div className= "max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
    <Image
  alt="Background image"
  className="w-full h-auto rounded-md shadow-md mb-6"
  width={800}
  height={400}
  loading="eager"
  role="presentation"
  src="/images/pic3.jpg"
/>
      <p className="text-lg">
      About eight months ago we open-sourced our progress on Tailwind CSS v4.0. Hundreds of
       hours of fixing bugs, soul-crushing backward compatibility work, and troubleshooting Windows CI failures
        later, I’m excited to finally tag the first public beta release.
<br />
<br />
As I talked about when we published the first alpha, Tailwind CSS v4.0 is an all-new engine built for
 performance, and designed for the modern web.
<br />
<br />
<span className='font-bold'>Built for performance</span> — full builds in the new engine are up to 5x faster, and incremental builds
 are over 100x faster — and measured in microseconds.
 <br />
 <br />
<span className='font-bold'>Unified toolchain </span>— built-in import handling, vendor prefixing, and syntax transforms, with no 
additional tooling required.
<br />
<br />
<span className='font-bold'>CSS-first configuration</span> — a reimagined developer experience where you customize and extend
 the framework directly in CSS instead of a JavaScript configuration file.
 <br />
 <br />
 <span className='font-bold'>Designed for the modern web </span>— built on native cascade layers, wide-gamut colors, and including
 first-class support for modern CSS features like container queries,<span className='font-semibold'>@starting-style</span> , popovers, 
 and more.
 <br />
 <br />
There’s so much more to say, but everything you need to get started is in the new beta documentation
 we published today:
<br />
<br />
<span className='font-semibold'>Get started with Tailwind CSS v4.0 Beta 1</span>
<br />
<br />
Start building and help us bullet-proof this thing for the stable release early in the new year
      </p>
     
      <CommentSection/>
    </div>
    </div>
    </div>
  )
}

export default page
