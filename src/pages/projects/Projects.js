import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import PublicationData from "../../shared/opensource/publications.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                {/* <ProjectsImg theme={theme} /> */}
                <img
                  width="100%"
                  src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/177972e0-4583-428b-b4db-da5546b71310.jpg"
                  alt="uboric.com"
                />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div
          className="repo-cards-div-main"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* {ProjectsData.data.map((repo) => {
            // return <GithubRepoCard repo={repo} theme={theme} />;
          })} */}

          <Button
            text={"Github Repo"}
            className="project-button"
            href="https://github.com/JaiS739/Sugar-Cosmetic"
            newTab={true}
            theme={theme}
          />
          <Button
            text={"Live Link"}
            className="project-button"
            href="https://jais739.github.io/Sugar-Cosmetic/"
            newTab={true}
            theme={theme}
          />
          <Button
            text={"Project Blog"}
            className="project-button"
            href="https://medium.com/@jksingh00739/sugar-cosmetics-851b92ca0953"
            newTab={true}
            theme={theme}
          />
        </div>

        {/* -----------------------xxxxxxxxxxxxxxxxxx------------------ */}
        {/* uboric.com */}

        <div className="basic-projects" style={{ marginTop: "100px" }}>
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                {/* <ProjectsImg theme={theme} /> */}
                <img
                  width="100%"
                  src="https://near-steel-1499.vercel.app/static/media/pic3.e23fe22e2ee749659ca9.PNG"
                  alt="uboric.com"
                />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  Uboric.com
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  This is my first project in which I used ReactJs and Redux for
                  the first time.
                </p>
                <h1>Tech used</h1>
                <h3>React | Redux | Chakra UI | CSS </h3>
              </div>
            </div>
          </Fade>
        </div>
        <div
          className="repo-cards-div-main"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            text={"Github Repo"}
            className="project-button"
            href="https://github.com/sarikasingh30/near-steel-1499"
            newTab={true}
            theme={theme}
          />
          <Button
            text={"Live Link"}
            className="project-button"
            href="https://near-steel-1499.vercel.app/"
            newTab={true}
            theme={theme}
          />

          {/* {ProjectsData.data.map((repo) => {
            // return <GithubRepoCard repo={repo} theme={theme} />;
          })} */}
        </div>

        {/* Publications  */}

        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="repo-cards-div-main">
          {PublicationData.data.map((repo) => {
            // return <PublicationCard repo={repo} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
