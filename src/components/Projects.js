import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import Flyer from "../images/Flyer.png";
import Winnie from "../images/Winnie.png";
import pokedex from "../video/pokemon_app.mov";
import aiArtGallery from "../video/AI_Art_Gallery_demo.mov";

import "../style/education.css";

export const Projects = () => {
  const projectsList = [
    {
      title: "Landing page for instant messaging app",
      img: Flyer,
      link: "https://main--jovial-smakager-39e832.netlify.app",
      repo: "https://github.com/biancafrancini/Landing-page-chat-app/tree/main/landing_page",
    },
    {
      title: 'Easy login form ("Winnie the Pooh" style)',
      img: Winnie,
      link: "https://statuesque-starship-25d9f5.netlify.app",
      repo: "https://github.com/biancafrancini/Easy-form/tree/main/form",
    },
    {
      title: "Pokédéx (Pokémons App)",
      video: pokedex,
      link: "",
      repo: "https://github.com/biancafrancini/Pokedex-project",
    },
    {
      title: "FaikeArt (AI ART Gallery)",
      video: aiArtGallery,
      link: "",
      repo: "https://github.com/biancafrancini/Art_Gallery",
    },
    {/*
      title: "Art Galleries Finder app (Figma prototype)",
      figma: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fre6yqCyFL9hYz5tL5LH1cI%2FHomepage%3Ftype%3Ddesign%26node-id%3D1-2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2",
    },*/}
  ];

  return (
    <div
      className="flex flex-col bg-black m-auto items-center py-24"
      id="projects"
    >
      <h2 className="font-bold md:text-5xl text-4xl text-white pb-16">
        {" "}
        💪🏻 Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center min-h-72">
        {projectsList &&
          projectsList.map((project, index) => (
            <div key={index} className="py-4 items-center mt-12">
              <div className="content-text text-white flex flex-col justify-center min-h-72 items-center">
                {project.img ? (
                  <img
                    src={project.img}
                    alt="project screenshot"
                    className="rounded-sm border-2 mx-20 my-2 md:w-72 w-64"
                  />
                ) : (
                  project.video && (
                    <video
                      controls
                      autoplay
                      className="rounded-sm border-2 mx-20 my-2 md:w-72 w-64 md:h-52 h-48"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )
                )}
                <h3 className="font-thin md:text-xl text-lg w-fit text-white w-3/4 text-sm p-4">
                  {project.title}
                </h3>
                <div className="flex justify-center py-4 w-1/2 md:text-3xl text-2xl">
                  {project.repo ? (
                    <Link
                      to={project.repo}
                      target="_blank"
                      className="w-10 h-4 hover:text-green-600"
                    >
                      <BsGithub />
                    </Link>
                  ) : (
                    ""
                  )}
                  {project.link ? (
                    <Link
                      to={project.link}
                      target="_blank"
                      className="w-10 h-4 hover:text-green-600"
                    >
                      <TbWorldWww />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
    </div>
    <div className="figma-projects grid grid-cols-1 md:grid-cols-2 md:gap-24 place-items-center md:mt-2">
      <div className="md:ml-8 md:mb-64 mb-12 text-center text-white">
          <h3 className="font-bold md:text-3xl text-2xl md:pb-4 pb-2">Art Galleries Finder app</h3>
          <h4 className="md:text-lg text-md pb-4">Low-fidelity Prototype built with Figma</h4>
      </div>
      <div className="">
         <iframe
          className="prototype border border-2 rounded-sm"
          title="prototype app"
          width= "250"
          height= "550"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fre6yqCyFL9hYz5tL5LH1cI%2FHomepage%3Ftype%3Ddesign%26node-id%3D1-2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
          allowfullscreen
        ></iframe>
        </div>
      </div>
    </div>
  );
};
