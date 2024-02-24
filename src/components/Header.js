import React from "react";
import Navbar from "./Navbar";
import background from "../assets/images/home.jpg";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
    </div>
  );
};

export default Header;
