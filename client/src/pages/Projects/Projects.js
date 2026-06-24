import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          These featured projects showcase real-world apps built with modern
          web technologies. Each project demonstrates a different skill set:
          an Airbnb-style booking platform with full-stack React, Node.js, and
          MongoDB integration; a real-time video calling app with responsive UI
          and WebRTC support; and a facial recognition system using machine
          learning and computer vision. Together they reflect practical
          experience in building polished, user-focused applications from
          frontend design through backend deployment.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    // src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    src="https://www.mridul.tech/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbxcernxw%2Fimage%2Fupload%2Fv1680855032%2FMridul.Tech%2FProjects%2Fairbnb_clone_0d10aeee13_sqw7b1.webp&w=3840&q=75"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Airbnb Clone
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://wanderlust-q9gn.onrender.com/listings"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                    src="https://m.media-amazon.com/images/I/712Df4qZkpL.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Video Calling App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://frontendvc.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Facial Recognition</span>
                  <img
                    // src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    src="https://ar5iv.labs.arxiv.org/html/2212.04782/assets/someresults.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Tensorflow</span>
                  <span className="card-detail-badge">Skimage</span>

                  <span className="card-detail-badge">CV2</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Facial Recognition</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Parikshit-1234/LGM-DataScience-Task-number-10">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
