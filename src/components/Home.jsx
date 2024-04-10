import Typewriter from "./Typewriter";
import Hero from "./Hero";
export default function Home() {
  const seed = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className='bg-[#f5f5f7] min-h-screen flex flex-col justify-center p-4 mx-auto md:mx-56 '>
      <div className='flex items-start mb-4 mt-6'>
        <header className='text-5xl font-bold text-[#333]'>
          <span className='text-[#bd1e59]'>{`> `}</span>
        </header>
        <Typewriter
          className='text-[#bd1e59] text-5xl md:text-4.5xl ml-4'
          text='Hello!'
        />
      </div>
      <Hero seed={seed} />
      <div className='mt-6 p-4 md:p-6 bg-white rounded-lg shadow-md '>
        <div className='flex space-x-1.5 mb-4'>
          <span className='block w-3 h-3 bg-[#ff5f56] rounded-full' />
          <span className='block w-3 h-3 bg-[#ffbd2e] rounded-full' />
          <span className='block w-3 h-3 bg-[#27c93f] rounded-full' />
        </div>
        <div className='bg-[#282a36] text-[#f8f8f2] rounded-lg p-4 md:p-6'>
          <p className='text-[#bd93f9]'>{`> Prateek.currentLocation`}</p>
          <p className='text-[#50fa7b]'>"Haryana,India"</p>
          <p className='text-[#bd93f9] mt-2'>{`> Prateek.contactInfo`}</p>
          <p className='text-[#50fa7b]'>
            ["prrtek@outlook.com", "LinkedIn", "github"]
          </p>
          <p className='text-[#bd93f9] mt-2'>{`> Prateek.resume`}</p>
          <p className='text-[#50fa7b]'>"prateek-resume.pdf"</p>
          <p className='text-[#bd93f9] mt-2'>{`> Prateek.interests`}</p>
          <p className='text-[#50fa7b]'>
            ["design", "chess", "cricket", "reading"]
          </p>
          <p className='text-[#bd93f9] mt-2'>{`> Prateek.education`}</p>
          <p className='text-[#50fa7b]'>
            "B.Tech in Computer Science and Engineering"
          </p>
          <p className='text-[#bd93f9] mt-2'>{`> Prateek.skills`}</p>
          <p className='text-[#50fa7b]'>
            ["Html / CSS", "JavaScript", "Java", "React", "Node.js", "Firebase",
            "TailwindCSS", "git","PostgreSQL","MongoDB","Prisma"]
          </p>
        </div>
      </div>
    </div>
  );
}
