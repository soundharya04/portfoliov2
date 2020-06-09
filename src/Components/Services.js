import React from "react";
import { Section, ImageCard } from "./UI/dispElements";
import s1 from "../resources/images/services/s1.png";
import s2 from "../resources/images/services/s2.png";
import s3 from "../resources/images/services/s3.png";
import s4 from "../resources/images/services/s4.png";

const Services = () => {
  return (
    <Section id="services" color="white" sectionStyle={{}}>
      <div className="services-area">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 text-center services-title">
              <h5 className="display-4 m-3 text-muted">Services Offered</h5>
              <p className="para">
                If you wish to provide awestruck experience to your users, then
                you are at the right place. Check out best services I provide to
                my clients..
              </p>
            </div>
          </div>
          <div className="container services-list">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <ImageCard src={s1} title="Web Developer">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </ImageCard>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <ImageCard src={s2} title="UX/UI Designing">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </ImageCard>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <ImageCard src={s3} title="Web Design">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </ImageCard>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <ImageCard src={s4} title="SEO optimization">
                  To stand out in the queue SEO optimization is a must and its
                  one of our best service{" "}
                </ImageCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
