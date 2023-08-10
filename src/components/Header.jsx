import React from "react";
import header_image from '../assets/header_image.svg';
// import head from "./head.css";
function Header() {

  return (
    <div
      className=' w-full md:flex flex-row-reverse pb-12 justify-around bg-cover bg-center bg-[url("/src/assets/bg.png")]'
      style={{ height: "auto",minHeight:'100vh' }}
    >
       <div className="ml-auto mr-auto w-3/6 h-3/6 rounded-full ">
        <img src={header_image} className="pt-24  ml-auto mr-auto" alt="" />
      </div>
      <div className="w-3/6 md:w-full md:ml-12 ml-auto mr-auto md:mt-auto mt-12 md:mb-auto ml-12">
        <p className="text-white text-5xl font-thin">I'm Mayank Gupta</p>
        <p className="mt-5 text-gray ml-auto mr-auto ">
          <span> Full Stack Developer & Graphic Designer</span>
        </p>
        <div className="flex flex-wrap md:w-3/6">
        <p className="mt-5  text-gray ">
       
     
    
   </p>
        </div>
    
      </div>
     
    </div>
  );
}

export default Header;
