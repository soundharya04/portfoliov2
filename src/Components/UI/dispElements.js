import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const Card = (props) => {
  let cardClass = ["card p-10"];
  if (props.bCard) {
    cardClass.push("bCard");
  }
  return (
    <div
      className={cardClass.join(" ")}
      style={{
        width: props.width ? props.width : "100%",
        height: props.height ? props.height : "100%",
        ...props.cardStyle,
      }}
    >
      {props.children}
    </div>
  );
};

export const ImageCard = (props) => {
  return (
    <div className="services">
      <div className=" text-center py-4">
        <img src={props.src} alt="Services-1"></img>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title text-uppercase font-roboto">{props.title}</h5>
        <p className="card-text text-secondary">{props.children}</p>
      </div>
    </div>
  );
};
export const DownArrow = (props) => {
  return (
    <div className="arrow-box text-center">
      <div className="nav-item m-2 btn text-decoration-none">
        {console.log(props)}
        <Link
          activeClass="active"
          to={props.to}
          spy={true}
          smooth={true}
          offset={Number(props.offset)}
          duration={500}
        >
          <span style={{ borderColor: props.color }}></span>
          <span style={{ borderColor: props.color }}></span>
          <span style={{ borderColor: props.color }}></span>
        </Link>
      </div>
    </div>
  );
};

export const Section = (props) => {
  let sectionClass = ["section"];
  if (props.clipped) {
    sectionClass.push("clipped");
  }
  return (
    <div
      className={sectionClass.join(" ")}
      id={props.id}
      style={{
        backgroundColor: props.color,
        ...props.sectionStyle,
      }}
    >
      {props.children}
    </div>
  );
};

export const CircularProgress = (props) => {
  return (
    <div className="box">
      <div className="percent">
        <svg>
          <circle cx="50" cy="50" r="50"></circle>
          <circle
            cx="50"
            cy="50"
            r="50"
            style={{
              stroke: props.progressColor,
              strokeDashoffset: `calc(300 - ((300 * ${props.percentage}) / 100))`,
            }}
          ></circle>
        </svg>
        <div className="number">
          <h2>
            {props.percentage}
            <span>%</span>
          </h2>
        </div>
      </div>
      <h2 className="h5 text-white mt-3">{props.skill}</h2>
    </div>
  );
};
