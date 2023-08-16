import React from 'react'
import  '../../styles/ihover.css'
import project1 from '../assets/project1.png'
function Projects() {

    const projectsData = [
        {
          title: 'Project 1',
          image:project1,
          description: 'Description of Project 1',
          link: 'https://example.com/project1',
        },
        {
          title: 'Project 2',
          image:'https://placehold.co/600x400',
          description: 'Description of Project 2',
          link: 'https://example.com/project2',
        },
        {
            title: 'Project 1',
            image:'https://placehold.co/600x400',
            description: 'Description of Project 1',
            link: 'https://example.com/project1',
          },
          {
            title: 'Project 2',
            image:'https://placehold.co/600x400',
            description: 'Description of Project 2',
            link: 'https://example.com/project2',
          },
        // Add more projects
      ];
    
  return (
    <div id='projects'>

<section className=" flex justify-center bg-dark ">
      <div className=" ">
        <h2 className="text-4xl font-bold text-center text-white font-thin mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center  ">
          {projectsData.map((project, index) => (
            <div key={index} className=" shadow-md mx-5 my-5 transition-scale duration-150 ease-in-out hover:scale-110 transform-gpu transition-padding" style={{width:'500px',maxHeight:'500px',}}>
              <a href={project.link} target="_blank"  rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="rounded-lg " />
              </a>
           
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects