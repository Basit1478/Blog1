import CommentSection from '@/components/CommentSection'
import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
        <div>
       <div className="min-h-screen p-6">
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
      <p className="text-lg text-black">
      Travel enthusiasts often flock to well-known destinations. But there are many underrated
       spots that offer unique experiences. Here, we highlight ten destinations that deserve
        more attention in 2024.
<br />
<br />
<span className='text-2xl font-bold'>1. Matera, Italy</span>
<br />
<br />
Matera is a historic city known for its ancient cave dwellings. The stunning architecture 
and rich history make it a must-visit. You can explore the Sassi, a complex of cave houses 
and churches carved into the rock.
<br />
<br />
<span className='text-2xl font-bold'>2. Bled, Slovenia</span>
<br />
<br />
B lake and a medieval castle. Visitors can take a boat ride to Bled Island or hike to the 
castle for panoramic views. The serene environment is perfect for relaxation.
<br />
<br />
<span className='text-2xl font-bold'>3. Plovdiv, Bulgaria</span>
<br />
<br />
Plovdiv is one of the oldest cities in Europe. Its vibrant culture and ancient ruins attract 
history buffs. The Old Town is filled with colorful houses and cobblestone streets that transport
 you back in time.
 <br />
 <br />
 <span className='text-2xl font-bold'>4. Faroe Islands</span>
<br />
<br />
The Faroe Islands offer dramatic landscapes and a sense of solitude. Hikers and nature lovers
 will find plenty of trails and bird-watching opportunities. The islands are a paradise for 
 those who seek adventure off the beaten path.
 <br />
 <br />
 <span className='text-2xl font-bold'>5. Luang Prabang, Laos</span>
<br />
<br />
Luang Prabang is a UNESCO World Heritage site known for its temples and colonial architecture. 
The town offers a blend of spiritual and cultural experiences. Visitors can participate in a 
traditional alms-giving ceremony or explore the night market.
<br />
<br />
<span className='text-2xl font-bold'>6. Salento, Colombia</span>
<br />
<br />
Salento is a charming town in the coffee region of Colombia. It is famous for its colorful buildings 
and coffee farms. You can take a tour of a coffee plantation or hike in the Cocora Valley to see the 
towering wax palms.
<br />
<br />
<span className='text-2xl font-bold'>7. Rovaniemi, Finland</span>
<br />
<br />
Rovaniemi is known as the official hometown of Santa Claus. It offers a magical experience for 
families. You can visit Santa Claus Village, ride a reindeer sleigh, or witness the Northern Lights.
<br />
<br />
<span className='text-2xl font-bold'>8. Tbilisi, Georgia</span>
<br />
<br />
Tbilisi is a city that blends old and new. Its diverse architecture and vibrant arts scene 
make it a fascinating place to explore. Stroll through the historic districts or enjoy the
 modern cafes and galleries.
 <br />
 <br />
 <span className='text-2xl font-bold'>9. Gdansk, Poland</span>
<br />
<br />
Gdansk is a port city with a rich maritime history. The reconstructed Old Town is a highlight, 
featuring beautiful buildings and historic sites. You can also visit the European Solidarity
 Centre to learn about the city's role in modern history.
 <br />
 <br />
<span className='text-2xl font-bold'>10. Okinawa, Japan</span> 
<br />
<br />
Okinawa is a tropical paradise with beautiful beaches and a unique culture. 
The island offers activities like snorkeling, diving, and exploring ancient castles. 
It is a great destination for those who want to experience a different side of Japan.
      </p>
     
      <CommentSection/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default page
