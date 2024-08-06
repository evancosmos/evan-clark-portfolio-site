import { useState } from "react";

interface ProjectProps {
    name: string;
    image: string;
    link: string;
    description: string;
  }

export default function Project({name, image, link, description}: ProjectProps) { //anyone else find typescript with props way too ugly?
    const [isHover, setIsHover] = useState<Boolean>(false)

    return (
    <div className="hover:scale-110 ">
        <div>{name}</div>
        <a href={link}>
        <div className="image-container relative bg-gradient-to-t from-black">
            <img src={image} onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)} className="hover:opacity-50"/>
            
            { isHover ? 
            <div className="text-overlay absolute left-0 top-0 p-4">
                {description}
            </div>
            : <span/> }
        </div>
        </a>
    </div>
    );
  }