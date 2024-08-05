'use client'
import NavBar from "@/components/navBar";
import { useState } from "react";
import { pdfjs, Document, Page} from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Spiner from "@/components/spinner";

const punycode = require('punycode/');

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

export default function Resume() {
    const [dynamicInvert, setDynamicInvert] = useState<string>("");
    const [isPDFLoad, setIsPDFLoad] = useState<Boolean>(false);

    function toggleInvert () {
        if(dynamicInvert == ""){
            setDynamicInvert("invert");
        }
        else{
            setDynamicInvert("");
        }
    }

    return (
        <div>
            <NavBar/>

            <button onClick={toggleInvert} className="fixed bottom-3 right-3 bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5">Toggle Night Mode</button>
            <a href="Evan_Clark_Resume.pdf" className="fixed bottom-3 left-3 bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5">Download Resume</a>

            <div id="resContain" className="flex flex-col items-center">
                { isPDFLoad ? <div className="absolute animate-gentleping bg-blue-300 top-[125px] w-[920px] h-[1185px] -z-10"/> : <span/> }
                    <span className={dynamicInvert}>
                        { isPDFLoad ? <span/> : 
                        <div className="pt-40">
                        <Spiner/>
                        </div>
                        }
                        <Document file="Evan_Clark_Resume.pdf" className={"w-full"} loading="" onLoadSuccess={() => setIsPDFLoad(true)}>
                            <Page pageNumber={1} width={900} renderTextLayer={false} className={"content-center text-center top-20"}/>
                        </Document>
                    </span>
            </div>

            <div id="dummyDivForMorePage" className="bg-opacity-0 h-60"></div>
        </div>
    );

}