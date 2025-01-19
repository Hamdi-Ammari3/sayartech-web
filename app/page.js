'use client'
import React,{useState} from 'react'
import './style.css'
import Navbar from '../components/navBar'
import Main from '../components/main'
import About from '../components/about'
import Features from '../components/features'
import Contact from '../components/contact'

const Page = () => {
  const [activeSection, setActiveSection] = useState('home')

  // Function to render the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Main />;
      case 'about':
        return <About />;
      case 'features':
        return <Features />;
      case 'contact':
        return <Contact />;
      default:
        return <Main />;
    }
  };

  return (
    <div className='container'>
      <Navbar setActiveSection={setActiveSection}/>
      <div className="main-box">{renderSection()}</div>
    </div>
  )
}

export default Page