'use client'

import NavBar from "@/components/navBar";
import Project from "@/components/project";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const proj1des = "Using a dataset containing the personality traits and introduction biographies of users on the dating site OkCupid, I constructed a language model that identified new user's traits based only on their bios. The primary model used was the Multi-layer Perceptron which is the backbone for most machine learning models today."
  const proj2des = "A webapp that creates a playlist on your Spotify account with a runtime approximate to the time you enter."
  const proj3des = "Coming Soon"

  return (
    <div>
      <div id="screen1" className="h-screen">
        <div className="z-50">
          <NavBar/>
        </div>
        
        <div id="introContainer" className="w-full">
          {/*Pop up */}
          <div className="float-right z-10 absolute">
            <div className="animate-popin">
              <div className="container">
                <Image src="/mePic.png" alt="Me" width="300" height="300" className="rotate-90" id="mainProPic"/>
              </div>
            </div>
          </div>

          {/*Intro Text*/}
          <div id="mainText" className="text-white text-left h-fit top-6 mx-4 mt-8 font-mono text-5xl md:mt-20 md:mx-20 md:text-8xl">
            Hey I'm Evan, <br/>
            Software Developer & Technical Analyst.<br/>
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

      <div id="ProjHead" className="text-white relative z-20 text-left font-sans text-xl mx-5 mb-10 space-x-7 md:text-6xl md:mx-9">Personal Projects</div>
      <div id="ProjContainer" className="grid grid-cols-1 md:grid-cols-3 text-white md:text-lg gap-9 mx-9 font-mono">
        <Project name="Natural Language Processing on OkCupid Data" link="https://github.com/evancosmos/NLP-on-OkCupidData" image="https://cdn.pixabay.com/photo/2017/04/13/20/26/artificial-intelligence-2228610_960_720.jpg" description={proj1des}/>
        <Project name="Spotitime" link="https://spotitime-ce99f.firebaseapp.com/" image="https://cdn.pixabay.com/photo/2013/07/12/18/17/equalizer-153212_960_720.png" description={proj2des}/>
        <Project name="Translink Travel" link="google.com" image="https://upload.wikimedia.org/wikipedia/commons/5/5e/Vancouver_E40LFR_trolleybus_2214.jpg" description={proj3des}/>
      </div>


      <div id="dummyFooter" className="bg-opacity-0 h-80"></div>
    </div>
  );
}
