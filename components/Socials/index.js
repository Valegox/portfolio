import React from "react";
import Button from "../Button";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = ({ className }) => {

  let faClass = `text-2xl m-2 cursor-pointer`;
  const style = { padding: 0, margin: 0 };

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      <Button onClick={() => window.open('https://github.com/Valegox')} style={style}>
        <FaGithub className={faClass} />
      </Button>

      <Button onClick={() => window.open('https://fr.linkedin.com/in/valentin-gegoux-722a501ab')} style={style}>
        <FaLinkedin className={faClass} />
      </Button>

      <Button onClick={() => window.open('https://www.instagram.com/valentingegoux/')} style={style}>
        <FaInstagram className={faClass} />
      </Button>

      <Button onClick={() => window.open('mailto:valentin.gegoux@epitech.eu')} style={style}>
        <HiOutlineMail className={faClass} />
      </Button>
      
      {/* {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <span style={{fontSize: '2em', margin: '15px'}}>{social.title}</span>
        </Button>
      ))} */}
    </div>
  );
};

export default Socials;
