import React from "react";
import { Section } from "../Components/UI/dispElements";
import about from "../resources/images/about-us.png";
import { DownArrow } from "./UI/dispElements";

const About = () => {
  return (
    <Section
      id="about"
      color="white"
      sectionStyle={{
        paddingTop: "10%",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-12 align-self-start">
            <div className="about-image mx-auto">
              <img src={about} alt="About us"></img>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 about-title">
            <h2 className="display-4 heroText">
              <span>About Me</span>
            </h2>
            <div className="paragraph py-2  w-100">
              <p className="para">
                I'm Soundharya, a budding fullstack developer and UI/UX designer
                with 4+ years of industry experience in design and development.
                I have developed a strong passion for UI effects, animations and
                creating intuitive, dynamic user experiences.
              </p>
              <p className="para">
                I develope sites to be both user and search engine friendly
                using the latest development principles and technologies. To
                find out more about what I can do check out below
              </p>
              <DownArrow color="black" to="skills" offset="10" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
