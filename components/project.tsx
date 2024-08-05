interface ProjectProps {
    name: string;
    image: string;
    link: string;
    description: string;
  }

export default function Project({name, image, link, description}: ProjectProps) { //anyone else find typescript with props way too ugly?
    return (
    <div className="hover:scale-110">
        <div>{name}</div>
        <a href={link}>
        <div className="image-container relative bg-gradient-to-t from-black">
            <img src={image} className=" hover:opacity-50"/>
            <div className=" text-overlay absolute left-0 top-0 p-4">
                {description}
            </div>
        </div>
        </a>
    </div>
    );
  }