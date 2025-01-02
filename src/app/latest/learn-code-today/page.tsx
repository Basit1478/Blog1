import CommentSection from '@/components/CommentSection'
import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
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
  src="/images/pic6.webp"
/>
      <p className="text-lg text-black">
      <span className="text-4xl font-semibold font-serif ">I’</span>
      m going to tell you exactly how I would learn to code today, 
        if I were <br /> starting all over again. No prior knowledge of coding is required! <br />
        <br />
        But,first, I’m going to tell you my story, so you’ll avoid my biggest
        mistake, a <br />mistake so bad that I didn’t get a full-time, salaried job as
        a software engineer <br />until 2021, more than 23 years after I started
        programming.
      </p>
      <br />
      <h1 className="text-2xl font-bold ">How I Started as a Self-Taught Web Developer</h1>
      <br />
      <p className="text-lg">
      I taught myself to program at age 9 when, during a Christmas vacation to <br />
      my grandmother’s home, I discovered an HTML textbook in a bookshop.
<br />
<br />
I was definitely the kind of kid to love reading, especially video game <br />
 manuals, and this was a gateway to a whole new world of creativity.
<br />
<br />
Over the next few years, I led my middle school team to compete in the <br />
 national championships of HTML coding as part of the Technology <br />
 Student Association, since my project had won third place in state competition. 
<br />
<br />
Then I landed my first “professional” web development gig, though I don’t <br />
count it as when I started my “career” since I was too young to legally work.
      </p>
<br />
      <h1 className="text-2xl font-bold ">I Knew Too Many Tools To Be a Successful Developer</h1>
      <p className=" text-lg">
        <br />
      In my early career, I was told my tech stack and “marching orders” from my <br />
      bosses and teachers, so I had to become a generalist programmer.
<br />
<br />
That was immediately a problem when I discovered that research wasn’t <br />
a good fit, and — after a year in a PhD program — I entered the job market.
<br />
<br />
First, there were only a handful (less than 5) job openings available for web <br />
developers or programmers back in my hometown of Richmond, Virginia.
<br />
<br />
Second, of the jobs available, most of them wanted 3–5 years of professional<br />
 work experience, typically PHP but also Java.
<br />
<br />
I would never work with Java for any price, and I have no idea why they<br />
 forced it down my throat in college, so that left the PHP job.
<br />
<br />
I had been building full-stack apps with PHP (and its cousin ASP) for a while,<br />
 and the World Studies’ film database was still available.
<br />
<br />
However, I didn’t have any years of “full-time work experience” with the job<br />
 title of “software engineer,” so I shrugged and went back to freelancing.
 <br />
 <br />
The next year, I joined an adult men’s tennis team and reconnected with<br />
 Shom, a friend from the Bioinformatics Master’s program.
 <br />
 <br />
He was working in some local job using his degree, relating how useful it had<br />
 been to be an intern to get work experience in his college “externship.”
 <br />
 <br />
That sparked a memory of another Master’s student acquaintance of mine<br />
 who had also done the “externship” to get work experience.
 <br />
 <br />
As I was on a research career track, I did the “thesis” option, and worse than<br />
 that was the fact that I hadn’t just graduated with my master’s.
 <br />
 <br />
While “new grads” are usually considered for jobs, hiring managers seemed<br />
 to consider me an unemployed person with shallow skills!
 <br />
 <br />
I didn’t know it at the time, but — simply by learning a ton of different tools<br />
 — I had myself much less attractive as a job applicant. 
 <br />
 <br />
This was before “data science” was a separate career, but I still couldn’t<br />
 stomach processing health or insurance data all day as a bioinformatician,<br />
  so that option was off the table. I wanted to be building sites and apps.
  <br />
  <br />
I had a successful career as a freelancer, continuing on as a consultant web<br />
 developer focused on search rankings and marketing., and it supplemented<br />
  my sports medicine income as I pursued both careers simultaneously.
  <br />
  <br />
However, I made a crucial mistake, one I don’t want you to make!<br />
<br />
<br />
(No, I’m not talking about how I could have worked at Facebook or Google if <br />
 I had just moved to Silicon Valley instead of staying in Richmond, VA.)
 <br />
 <br />
My mistake was thinking that flexibility matters as a programmer. I was <br />
 mistaken in thinking that I should just learn whatever tech I need to.
 <br />
 <br />
That is not what people who hire senior software engineers want! <br />
<br />

Hiring managers want experts: specialists that have a proven track record of <br />
 making an impact with a certain set of tools in their full-time positions.
      </p>
     
      <CommentSection/>
    </div>
    </div>
    </div>
  )
}

export default page
