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
  src="/images/pic5.jpg"
/>
      <p className="text-lg">
      Daily physical activity and exercise is a staple of a balanced healthy lifestyle. As one of the seven 
      pillars of lifestyle medicine, staying active is about moving more and sitting less. We’ve all heard
       the benefits of incorporating fitness into your daily routine – regular exercise can help control 
       weight, strengthen your bones and muscles, prevent disease, improve your mental health, and the 
       list goes on. By moving more, you can boost your productivity and overall happiness, so even if 
       you don’t have access to a fitness center or find yourself stuck indoors, there are simple exercises 
       you can add to your routine that will keep you feeling your best.
<br />
<br />
Adhering to a regular physical activity schedule can be tough and being limited to do so indoors 
poses another set of challenges. But it doesn’t need to be difficult. A common misconception about
 exercising is that you need a gym or robust equipment. There are a multitude of resources for 
 exercise routines that you can do from the comfort of your home.
 <br />
 <br />
If you’re struggling to incorporate exercise into your day-to-day, here are five exercises to
 get you moving more and sitting less that can be done on your own time, in your own space!
 <br />
 <br />
*Make sure to warm-up before attempting any exercise; a five minute walk or stepping up and 
down on a stair step for three to five minutes are excellent options for getting your heart 
rate up and your blood pumping!
<br />
<br />
<span className='text-2xl font-bold'>At-Home Workout</span>
<br />
<br />
Spend 3-5 minutes warming up before you begin. Try for 6-10 repetitions of each exercise. 
Repeat the entire circuit 2-3 times.
<br />
<br />
<span className='text-2xl font-bold'>1. Bulgarian Split Squats</span>
<br />
<br />
Stand tall, core tight, place one foot on the chair
Hop front foot forward​
Lower straight down into a lunge position, press through front heel to return to the starting position 
<br />
<br />
<span className='text-2xl font-bold'>2. Quad Lift</span>
<br />
<br />
Sit tall, core tight, bend one leg
Hold holding bend knee, flex foot of straight leg and lift leg up
Squeeze at top and hold for 2 seconds, slowly lower back to floor and repeat
<br />
<br />
<span className='text-2xl font-bold'>3. Single Leg Glute Bridge (both sides)</span>
<br />
<br />
Lie on back with one foot flat on floor and other leg lifted
Press foot on floor into the ground lifting hips as high as you can
Squeeze glutes at top, lower slowly
<br />
<br />
<span className='text-2xl font-bold'>4. Alternating Jack Knife</span>
<br />
<br />
Lying on back with arms and legs extended
Lift chest, bending at hips
Reach one hand to opposite foot twisting through core, trying to meet in the middle
<br />
<br />
<span className='text-2xl font-bold'>5. Pike Push Up</span>
<br />
<br />
Start in high plank position & lift hips to the sky
Bend at the elbows lowering your forehead to the floor
Press into palms into floor until you reach the starting position

      </p>
     
      <CommentSection/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default page
