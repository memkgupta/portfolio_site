import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    
    console.log(id)
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
  
  };
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Navbar scrollFunction={handleScrollTo}></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
   
   </Routes>
   </BrowserRouter>
  )
}

export default App
