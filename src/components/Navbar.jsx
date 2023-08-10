import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';

function Navbar({scrollFunction}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const [isOpacity,setIsOpacity] = useState(false);
const handleScroll = ()=>{
const scrollY = window.scrollY;
if(scrollY>100){
    setIsOpacity(true);
}
else{
    setIsOpacity(false);
}
}
    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
  //   <header class={`text-gray bg-dark ${isOpacity?'bg-opacity-100':'bg-opacity-50'}  fixed top-0 left-0 right-0 z-10`}>
  //   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  //     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
  //         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  //       </svg>
  //       <span class="ml-3 text-xl">Tailblocks</span>
  //     </a>
  //     <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
  //       <Link to={'#'} class="mr-5 hover:text-green">First Link</Link>
  //       <Link to={'#'} class="mr-5 hover:text-green">Second Link</Link>
  //       <Link to={'#'} class="mr-5 hover:text-green">Third Link</Link>
  //       <Link to={'#'} class="mr-5 hover:text-green">Fourth Link</Link>
  //     </nav>
 
  //   </div>
  // </header>
  <nav className={`bg-dark p-4 ${isOpacity?'md:bg-opacity-100':'md:bg-opacity-50'} md:fixed top-0 left-0 right-0 z-10`}>
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-white font-bold text-xl">Mayank Gupta</div>
    <div className={`hidden md:flex space-x-4 ${isMenuOpen ? 'hidden' : 'block'} transition-all duration-300 ease-in-out`}>
      <Link to="#home" onClick={()=>{scrollFunction("home")}}  className="text-white hover:text-teal-300 transition-color duration-150 ease-in-out">Home</Link>
      <Link to="#about" onClick={()=>{scrollFunction("about")}} className="text-white hover:text-teal-300 transition-color duration-150 ease-in-out">About</Link>
      <Link to="#projects" onClick={()=>{scrollFunction("projects")}} className="text-white hover:text-teal-300 transition-color duration-150 ease-in-out">Projects</Link>
      <a href='https://mkguptaweb.hashnode.dev/' target='_blank' className="text-white hover:text-teal-300 transition-color duration-150 ease-in-out">Blogs</a>
      <Link to="#contact" onClick={()=>{scrollFunction("contact")}} className="text-white hover:text-teal-300 transition-color duration-150 ease-in-out">Contact</Link>
    </div>
    <div className="md:hidden">
      <button className="text-white" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
  <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} animate__animated animate__slideInLeft`}>
    <Link to="#home" onClick={()=>{scrollFunction("")}} className="block text-white p-2 hover:bg-teal-300 transition-color duration-150 ease-in-out">Home</Link>
    <Link to="#about" onClick={()=>{scrollFunction("about")}} className="block text-white p-2 hover:bg-teal-300 transition-color duration-150 ease-in-out">About</Link>
    <Link to="#projects" onClick={()=>{scrollFunction("projects")}} className="block text-white p-2 hover:bg-teal-300 transition-color duration-150 ease-in-out">Projects</Link>
    <a href='https://mkguptaweb.hashnode.dev/' target='_blank'  className="block text-white p-2 hover:bg-teal-300 transition-color duration-150 ease-in-out">Blogs</a>
    <Link to="#contact" onClick={()=>{scrollFunction("contact")}} className="block text-white p-2 hover:bg-teal-300 transition-color duration-150 ease-in-out">Contact</Link>
  </div>
</nav>
  )
}

export default Navbar