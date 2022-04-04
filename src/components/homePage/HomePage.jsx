import { useState } from "react";
import home from "../../svg/Index.svg";

const Home = () => {
  return (
    <div>
      <img
        width="100%"
        height="100%"
        src={home}
        alt="logo"
        className="imgLogo"
      ></img>
    </div>
  );
};

export default Home;
