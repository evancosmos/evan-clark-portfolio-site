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
        <div className="text-white text-left top-6 mx-20 mt-20 font-mono text-8xl">
          Hey I'm Evan, <br/>
          Software Developer and team player <br/>
          Based out of Vancouver, <br/>
          Canada 
        </div>
      </div>

      <div id="contactinfo" className="text-white text-left font-sans text-4xl mx-20 pt-2 space-x-7">
        <a>Github</a>
        <a>LinkedIn</a>
        <a>Email</a>
      </div>

      {/*Project Display*/}


      {/*About Text*/}
      <div>This website was made using NextJS, React, and Tailwind</div>

    </div>
  );
}
