'use client'
import NavBar from "@/components/navBar";
import { useState } from "react";
import { pdfjs, Document, Page} from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const punycode = require('punycode/');

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

export default function Resume() {
    const [dynamicInvert, setDynamicInvert] = useState<string>("");

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
                <div className="absolute animate-gentleping bg-blue-300 top-[125px] w-[920px] h-[1185px] -z-10"/>
                    <span className={dynamicInvert}>
                        <Document file="Evan_Clark_Resume.pdf" className={"w-full"}>
                            <Page pageNumber={1} width={900} renderTextLayer={false} className={"content-center text-center top-20"}/>
                        </Document>
                    </span>
            </div>
        </div>
    );

}