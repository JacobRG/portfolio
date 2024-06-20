import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import headshot from '../public/IMG_1153.jpg';
import MyFooter from "./components/MyFooter";

export default function Home() {
  return (
    <div>

      {/* Avatar */}
      <div className="flex flex-col justify-center items-center space-y-5 md:min-h-screen py-12 md:py-0">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image src={headshot} alt={"Headshot"} />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center">Hi,<br /> I’m Jacob.</h1>
          <h1 className="text-xl">Let’s connect on LinkedIn</h1>
        </div>
        <Link target="_blank" href="https://www.linkedin.com/in/jacobgambrell/">
          <button className="btn btn-wide">Connect</button>
        </Link>

        {/* Divider */}
        <div className="max-sm:hidden absolute bottom-5 left-0 right-0 text-center mx-4 md:mx-72">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-lg md:text-base font-medium leading-6 text-gray-900">My experience</span>
          </div>
        </div>

      </div>

      {/* Experience sections */}
      <div className="flex flex-col md:flex-row px-0 md:px-64 md:space-x-16 space-y-12 md:space-y-0"> {/* trying mobile here */}
        <Feed />
        <div className="flex flex-col space-y-5">
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-300">
            <div className="collapse-title text-xl font-medium">
              <h1 className="text-lg">Papa Johns Call Center Optimization</h1>
              <h1 className="text-base">(Senior Design Project)</h1>
            </div>
            <div className="collapse-content"> 
              <div className="space-y-1">
                <ul className="list-disc px-4">
                  <li>Designed and developed machine-learning monitoring systems to detect customer sentiment trends from call center interactions, social media, and website data</li>
                  <li>Utilized Python for web scraping, data cleaning, feature engineering, and modeling</li>
                  <li>Constructed comprehensive documentation and technical guides</li>
                  <li>Conducted weekly meetings and maintained direct communication with the Papa Johns team to align
                  project objectives and report progress</li>
                </ul>
              </div>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-300">
            <div className="collapse-title text-xl font-medium">
              <h1 className="text-lg">Silver Fern</h1>
              <h1 className="text-base">(Software Engineer Intern)</h1>
            </div>
            <div className="collapse-content"> 
              <div className="space-y-1">
                <ul className="list-disc px-4">
                  <li>Contributed to the development of “FULFILL”, a software solution for wholesale and retail greenhouse businesses</li>
                  <li>Evolved from learner to active developer; coded customer data analysis applications and managed database operations</li>
                  <li>Utilized C#, Blazor, Docker, MongoDB, and GraphQL in software development</li>
                  <li>Practiced Agile methodologies, domain-driven design, event sourcing, and test-driven development</li>
                </ul>
              </div>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-300">
            <div className="collapse-title text-xl font-medium">
              <h1 className="text-lg">Awesome Inc</h1>
              <h1 className="text-base">(Coding Club Head Coach)</h1>
            </div>
            <div className="collapse-content"> 
              <div className="space-y-1">
                <ul className="list-disc px-4">
                  <li>Led full classrooms of students in developing in Python and building strong programming foundations</li>
                  <li>Launched remote learning and facilitated multiple weekly sessions of interactive coding</li>
                  <li>Monitored student progress and engagement, ensuring a supportive and effective educational experience</li>
                </ul>
              </div>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-300">
            <div className="collapse-title text-xl font-medium">
              <h1 className="text-lg">Dribbly Sports Stat Tracking Bot</h1>
              <h1 className="text-base">(Discord Bot)</h1>
            </div>
            <div className="collapse-content"> 
              <div className="space-y-1">
                <ul className="list-disc px-4">
                  <li>Developed a Discord bot using Python to provide live sports stats for tracking functionalities</li>
                  <li>Integrated APIs for real-time data retrieval and used Discord API for bot commands allowing users to
                  track player stats</li>
                </ul>
              </div>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-300">
            <div className="collapse-title text-xl font-medium">
              <h1 className="text-lg">TSKR Task Management App</h1>
              <h1 className="text-base">(iOS Mobile App)</h1>
            </div>
            <div className="collapse-content"> 
              <div className="space-y-1">
                <ul className="list-disc px-4">
                  <li>Engineered a task management app with SwiftUI, enabling personal productivity and social interaction
                  through task sharing</li>
                  <li>Managed the entire app lifecycle from development to publication in the Apple App Store, navigating the
                  App Store’s review process, and adhering to all guidelines for successful app approval and release</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* <div className="flex flex-row px-64 pt-24">
        <div>
          <h1 className="text-2xl font-semibold">My Skills</h1>
          <p>Here is a story about my skills and how I got them. Probably about my experience but also heavily my personal interests and projects contributing to my skills.</p>
        </div>
        
      </div> */}

      <div className="pt-12"><MyFooter /></div>

    </div>
  );
}
