import React from "react";
import { Section, Card } from "../Components/UI/dispElements";

const Contact = () => {
  return (
    <Section
      id="contact"
      color="#101010"
      sectionStyle={{
        paddingTop: "5%",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6  col-md-12 d-flex justify-content-center align-items-center">
            <Card bCard height="400px" width="300px">
              <div>
                <div className="card-title h5 text-muted ">
                  Soundariya Kannan
                </div>
                <div className="card-title text-muted pb-3">
                  Fullstack Developer
                </div>
              </div>
              <div>
                <div className="card-title text-muted h5">Email</div>
                <div className="card-title text-muted pb-3">
                  souns14@gmail.com
                </div>
              </div>
              <div>
                <div className="card-title h5 text-muted ">Call me</div>
                <div className="card-title text-muted ">9677935225</div>
              </div>
            </Card>
          </div>
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center  about-title">
            <h2 className="display-4 mb-3">
              <span>Contact Me</span>
            </h2>
            <div className="jumbotron text-center  pb-3 w-75">
              <div className="formGroup text-white ">
                <input
                  className="formControl text-white mb-3"
                  type="text"
                  placeholder="Enter Name"
                  id="name"
                  autoComplete="off"
                ></input>

                <div className=" mb-3">
                  <input
                    className="formControl text-white mb-3"
                    placeholder="Enter email"
                    type="email"
                    autoComplete="off"
                    id="email"
                  ></input>
                </div>
                <div className="">
                  <textarea
                    className="formControl text-white "
                    type="email"
                    autoComplete="off"
                    id="email"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <button className="btn mt-3 btn-white" type="button">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="pt-2 pb-1">
        <div className=" container-fluid  footer_content">
          COPYRIGHTS <span className="footer_clr">©2020</span>
        </div>
      </footer>
    </Section>
  );
};

export default Contact;
