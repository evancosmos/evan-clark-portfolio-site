'use client'

import NavBar from "@/components/navBar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [greetingMsg, setGreetingMsg] = useState("Hello");
  const myStrs = ["Hello", "This site is made with React", "What's up?", "I like cheetos"]

  function randomGreet() {
    let randIndex = Math.floor(Math.random() * myStrs.length);
    setGreetingMsg(myStrs[randIndex]);
  }

  return (
    <div>
      <div className="z-50">
        <NavBar/>
      </div>
      
      <div id="introContainer" className="w-full">
        {/*Pop up */}
        <div className="float-right z-10 absolute">
          <div className="animate-popin" onAnimationEnd={() => randomGreet()}> {/*TODO: Animation end event does not trigger*/}
            <div className="container">
              {/* <span className="text-neutral-700 text-overlay absolute left-40 top-32 p-4"> {greetingMsg} </span> */}
              <Image src="/mePic.png" alt="Me" width="300" height="300" className="rotate-90" id="mainProPic"/>
            </div>
          </div>
        </div>

        {/*Intro Text*/}
        <div className="text-white text-left top-6 mx-4 mt-8 font-mono text-4xl md:mt-20 md:mx-20 md:text-8xl">
          Hey I'm Evan, <br/>
          Software Developer and Technical Analyst.<br/>
          Based out of Vancouver, <br/>
          Canada
        </div>
      </div>

      <div id="contactinfo" className="text-white relative z-20 text-left font-sans text-xl mx-5 pt-2 space-x-7 md:text-4xl md:mx-20">
        <a className="hover:text-blue-800" href="https://github.com/evancosmos">Github</a>
        <a className="hover:text-blue-800" href="https://www.linkedin.com/in/gitcommit-m-evan-clark/">LinkedIn</a>
        <a className="hover:text-blue-800" href="mailto:evanclark@live.ca">Email</a>
      </div>

    </div>
  );
}
