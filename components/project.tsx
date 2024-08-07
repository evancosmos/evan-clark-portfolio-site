import { useState, useEffect } from "react";

interface ProjectProps {
    name: string;
    image: string;
    link: string;
    description: string;
  }

export default function Project({name, image, link, description}: ProjectProps) { //anyone else find typescript with props way too ugly?
    const [isHover, setIsHover] = useState<Boolean>(false)
    const [dynamicOpacity, setDynamicOpacity] = useState<string>("");

    const activeProj = (changeState: Boolean) => {
        if (changeState) {
            setIsHover(true)
            setDynamicOpacity("opacity-30")
        } else {
            setIsHover(false)
            setDynamicOpacity("")
        }
    }

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsHover(true)
            setDynamicOpacity("opacity-90")
        } else {
            setIsHover(false)
            setDynamicOpacity("")
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    }, [])

    return (
    <div className="hover:scale-110 ">
        <div>{name}</div>
        <a href={link}>
        <div onMouseEnter={() => activeProj(true)} onMouseLeave={() => activeProj(false)} className="image-container relative bg-gradient-to-t from-black">
            <img src={image} className={dynamicOpacity}/>
            
            { isHover ?
            <div className="text-overlay md:absolute left-0 top-0 p-4">
                <p className="text-ellipsis overflow-hidden">{description}</p>
            </div>
            : <span/> }
        </div>
        </a>
    </div>
    );
  }