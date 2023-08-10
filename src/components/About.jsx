import React, { useEffect } from "react";
import {BiLogoJavascript,BiLogoReact,BiLogoTailwindCss} from 'react-icons/bi';
import {SiAdobephotoshop} from 'react-icons/si'
import {FaJava,FaNode} from 'react-icons/fa'
function About({scrollToRef}) {

  const skillsData = [
    { skill: 'JavaScript', level: 80,icon:<BiLogoJavascript></BiLogoJavascript> },
    { skill: 'React', level: 85,icon:<BiLogoReact></BiLogoReact> },
    { skill: 'Photoshop', level: 80,icon:<SiAdobephotoshop></SiAdobephotoshop> },
    { skill: 'Node.js', level: 70,icon:<FaNode></FaNode> },
    { skill: 'Tailwind CSS', level: 70,icon:<BiLogoTailwindCss></BiLogoTailwindCss> },
    { skill: 'JAVA', level: 50,icon:<FaJava></FaJava> },
  
    // Add more skills and levels here
  ];
  // Get all elements with the "animate" class


// Create an Intersection Observer instance
useEffect(()=>{
  window.addEventListener('scroll',(()=>{
    const animatedElements = document.querySelectorAll('.animate');
    const scroll = window.scrollY;
   if(scroll>1000){
    animatedElements.forEach((element)=>{
      element.classList.add('skillAnimation')
    })
   }
  return(()=>{
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach((element)=>{
      element.classList.remove('skillAnimation')
    })
  })
  }),[])
})
  return (
    <div id="about" ref={scrollToRef} className=" bg-dark ">
      <h3 className="text-5xl p-4  font-thin text-white text-center">About</h3>
      <p className="text-md p-4 font-extralight text-gray w-4/6 text-center ml-auto mr-auto">
      Hi there , My name is Mayank Gupta a full stack developer and on the journey to become more than a developer.
      With a huge interest and passion in technology I aspire to become a software engineer who will contribute in solving real life problems.
      Along with coding I also do some design in photoshop. 
      
      </p>
      <div className="p-12 bg-gray-100 py-12">
      <div id="skills" className="container mx-auto">
        <h2 className="text-3xl font-extralight text-white text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <h3 className="text-xl inline-flex text-white font-semibold mb-2">{skill.skill} <i className="ml-3 text-3xl text-gray">{skill.icon}</i> </h3>
              <div className="relative pt-1">
              
                <div className="flex h-2 bg-gray-200 rounded-full">
              <div style={{ width: `${skill.level}%` }}>   <div
                    
                    className="animate w-full h-full text-center text-xs text-white bg-teal-600  rounded-full"
                  ></div></div>
               
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
