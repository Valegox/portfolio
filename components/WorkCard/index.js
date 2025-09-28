import Image from "next/image";
import config from "../../next.config";

const WorkCard = ({ img, name, description, onClick }) => {
  const basePath = config.basePath ? config.basePath : "";

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ aspectRatio: 2 }}
      >
        {
          img.endsWith(".mp4") ? (
            <>
            <video
              className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              id="vid"
              autoPlay
              muted
              loop
            >
              <source src={`${basePath}${img}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </>
          )
          : 
          <Image
            alt={name}
            fill
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            src={`${basePath}${img}`}
          />
      }
      
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
