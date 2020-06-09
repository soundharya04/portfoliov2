import React from "react";
import { Card, DownArrow } from "./UI/dispElements";
import Typical from "react-typical";

const Header = () => (
  <header id="home" className="home">
    <Card
      width="500px"
      height="350px"
      cardStyle={{
        background: "transparent",
        marginLeft: "12%",
        paddingTop: "10%",
      }}
    >
      <span className="display-4 text-white">Soundharya Kannan</span>
      <p className=" text-center text-white h4">
        <Typical
          steps={["FULL STACK DEVELOPER", 1500, "UI/UX DESIGNER", 1500]}
          loop={Infinity}
          wrapper="p"
        />
      </p>
      <DownArrow color="white" to="about" offset="-50" />
    </Card>
  </header>
);

export default Header;
