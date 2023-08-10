import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Designs from '../components/Designs'
import Footer from '../components/Footer'

function Home() {
  return (
 <div id='home'>
 <Header></Header>
 <About></About>
 <Projects></Projects>
 <Designs></Designs>

 <Contact></Contact>
 <Footer></Footer>
 </div>
  )
}

export default Home