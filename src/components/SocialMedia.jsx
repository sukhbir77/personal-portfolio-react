import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {GrLinkedinOption} from "react-icons/gr"

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
          <a href="https://www.linkedin.com/in/sukhbir-singh-96b878180/" target="_blank"><GrLinkedinOption /></a>
      </div>
      <div>
      <a href="https://github.com/sukhbir77" target="_blank"><BsGithub /></a>
      </div>
      <div>
      <a href="https://www.instagram.com/sukhbirbrar_77/" target="_blank"><BsInstagram /></a>
      </div>
    </div>
  );
};

export default SocialMedia;
