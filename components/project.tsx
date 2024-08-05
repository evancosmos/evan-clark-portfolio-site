interface ProjectProps {
    name: string;
    image: string;
  }

export default function Project({name, image}: ProjectProps) { //anyone else find typescript with props way too ugly?
    return (
    <div className="hover:scale-110">
        <div>{name}</div>
        <img src={image}/>
        {/* <div>{description}</div> */}
    </div>
    );
  }