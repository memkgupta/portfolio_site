import React, { useEffect } from "react";

function About({scrollToRef}) {
  const skillsData = [
    { skill: 'JavaScript', level: 80 },
    { skill: 'React', level: 85 },
    { skill: 'Photoshop', level: 80 },
    { skill: 'Node.js', level: 70 },
    { skill: 'Tailwind CSS', level: 70 },
    { skill: 'JAVA', level: 50 },
  
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
        reprehenderit? Repellendus nulla incidunt expedita laborum cupiditate
        rerum corporis provident atque, velit deserunt mollitia pariatur
        eligendi laboriosam itaque earum! Tempore, optio accusamus voluptatibus
        praesentium tenetur in cumque maxime nostrum alias porro sunt rerum quo
        commodi aliquid molestiae a, aspernatur mollitia ratione saepe
        distinctio quidem beatae! Sit minus ea est aperiam. Delectus quia amet
        nam dolor impedit quo consequuntur! Adipisci ullam quia eos odit aliquid
        commodi vitae, rerum dolorum vel voluptates doloribus ducimus at
        corrupti iusto quibusdam, ipsa amet culpa itaque sunt deserunt debitis
        architecto aut quas nobis. Illo itaque officia vitae porro non rem
        tempora facere aperiam voluptates numquam aspernatur modi illum, aliquam
        fugit reprehenderit alias dolorem ducimus molestiae! Impedit quis
        maiores perspiciatis? Amet, aliquid tempora. Veniam delectus, dolore
        amet ab blanditiis sapiente omnis magnam perspiciatis quia similique.
        Maiores, praesentium. Exercitationem corrupti maiores necessitatibus a
        aperiam deserunt maxime et, labore porro, facilis magnam animi nemo
        quasi sint veritatis laborum odit possimus numquam perferendis fuga,
        repellat minus reprehenderit sapiente! Corrupti sit incidunt iusto,
        cumque maiores nobis itaque, temporibus sapiente dolore perspiciatis
      
      </p>
      <div className="p-12 bg-gray-100 py-12">
      <div id="skills" className="container mx-auto">
        <h2 className="text-3xl font-extralight text-white text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <h3 className="text-xl text-white font-semibold mb-2">{skill.skill}</h3>
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
