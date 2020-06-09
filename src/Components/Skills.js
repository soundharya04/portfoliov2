import React from "react";
import { Section, Card, CircularProgress } from "../Components/UI/dispElements";

const Skills = () => {
  return (
    <Section
      id="skills"
      color="#101010"
      clipped
      sectionStyle={{
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <h5 className="display-4 m-3 text-muted">Skills</h5>
      <div className="container">
        <div className="row d-flex justify-content-around py-2">
          <Card width="200px" height="200px" bCard>
            <CircularProgress
              progressColor="teal"
              skill="React"
              percentage="90"
            />
          </Card>
          <Card width="200px" height="200px" bCard>
            <CircularProgress
              progressColor="green"
              skill="Redux"
              percentage="70"
            />
          </Card>
          <Card width="200px" height="200px" bCard>
            <CircularProgress
              progressColor="crimson"
              skill="Oracle"
              percentage="90"
            />
          </Card>
        </div>
        <div className="row d-flex justify-content-around py-3 mb-3">
          <Card width="200px" height="200px" bCard>
            <CircularProgress
              progressColor="coral"
              skill="HTML"
              percentage="90"
            />
          </Card>
          <Card width="200px" height="200px" bCard>
            <CircularProgress
              progressColor="blue"
              skill="CSS"
              percentage="80"
            />
          </Card>
          <Card width="200px" height="200px" bCard>
            <CircularProgress
              progressColor="yellow"
              skill="Bootstrap"
              percentage="60"
            />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
