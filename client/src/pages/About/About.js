import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import ProfileImage from "../../assets/images/Photo.png";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={ProfileImage}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
               Parikshit Sahu is an aspiring AI developer currently pursuing an MSc in Computer Science. He brings together full-stack web development and AI/ML expertise, having completed full-stack training from Apna College and built projects like Wanderlust, a real-time video call app, and a car rental booking platform. On the AI side, he has developed a strong portfolio through hands-on projects and coursework in deep learning, statistics, and machine learning — including a credit card fraud detection system, facial recognition-based attendance and mood-detection tools, a handwritten equation solver using CNNs, a recommendation system for movies and music, and a next-word prediction model using stacked LSTMs. 
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
