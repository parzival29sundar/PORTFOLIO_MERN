import React from 'react'
import {useSelector} from 'react-redux'
import Header from '../../coponents/Header'
import Intro from './Intro'
import About from './About';
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'


function Home() {
  const {portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      
      {portfolioData &&(
        <div  className='bg-primary px-40 sm:px-5'>
        <Intro />
        <About />
        <Experiences/>
        <Projects />
        <Contact />
        <Footer />
        <LeftSider />
        </div>
      )}
    </div>
  )
}

export default Home;