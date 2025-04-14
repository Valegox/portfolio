import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = ({ className }) => {
  const faClass = `text-2xl m-2 cursor-pointer`;
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`} style={{marginLeft: '10px'}}>
      <FaGithub
        className={faClass}
        onClick={() => window.open('https://github.com/Valegox')}
      />
      <FaLinkedin
        className={faClass}
        onClick={() => window.open('https://fr.linkedin.com/in/valentin-gegoux-722a501ab')}
      />
      <FaInstagram
        className={faClass}
        onClick={() => window.open('https://www.instagram.com/valentingegoux/')}
      />
      <HiOutlineMail
        className={faClass}
        onClick={() => window.open('mailto:valentin.gegoux@epitech.eu')}
      />
      {/* {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <span style={{fontSize: '2em', margin: '15px'}}>{social.title}</span>
        </Button>
      ))} */}
    </div>
  );
};

export default Socials;
