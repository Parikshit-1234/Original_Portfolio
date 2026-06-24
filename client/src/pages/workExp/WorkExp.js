import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jul 2025 - Aug 2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Ibtidaa Tech
              </h4>
              <p>
                I gained hands-on experience in building and deploying scalable web applications, working across both frontend and backend technologies, and collaborating on real-world projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Oct 2024 - Nov 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
               Generative AI intern 
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Prodigy Infotech
              </h4>
              <p>
                Generative AI
                Large Language Models (LLM)
                cGAN
                Markov Chains
                Natural Language Processing (NLP)
                Neural Style Transfer 
                DALL-E
                Artificial Intelligence (AI)
                Pattern Recognition
                Generative AI
                Large Language Models (LLM)
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Nov 2023 - Dec 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Machine Learning Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Cognifyz Technologies
              </h4>
              <p>
                Pandas
                Multivariate Statistics
                AIML
                Scikit-Learn
                Feature Engineering
                Data Science
                Machine Learning
                Data Cleaning and Transformation
                Artificial Intelligence (AI)
                k-means clustering
                Model Training
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
