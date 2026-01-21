import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills'
import Project from './pages/Project';
import Contact from './pages/Contact';
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar';


function App() {

  const[currentSection,setCurrentSection]=useState('');

  const homeRef=useRef(null)
  const aboutRef=useRef(null)
  const skillsRef=useRef(null)
  const projectRef=useRef(null)
  const contactRef=useRef(null)

  const sectionRefs=[
    {ref:homeRef, id:'home'},
    {ref:aboutRef, id:'about'},
    {ref:skillsRef,id:'skills'},
    {ref:projectRef,id:'project'},
    {ref:contactRef,id:'contact'}
  ];


  const scrollTo = (ref,id) => {
    setCurrentSection(id);

    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      const visibleEntry=entries.find(entry=>entry.isIntersecting);
      if(visibleEntry){
        const id=visibleEntry.target.getAttribute('data-id');
        setCurrentSection(id);
      }
    },
    {threshold:0.6}
  );
    sectionRefs.forEach(({ref,id})=>{if(ref.current){
      ref.current.setAttribute('data-id',id);
      observer.observe(ref.current);
    }
    });
    return()=>observer.disconnect();
  },[]);

  return (
    <div>
      <Navbar 
        current={currentSection}
        onAbout={()=>scrollTo(aboutRef,'about')} 
        onHome={()=>scrollTo(homeRef,'home')} 
        onSkills={()=>scrollTo(skillsRef,'skills')} 
        onProject={()=>scrollTo(projectRef,'project')} 
        onContact={()=>scrollTo(contactRef,'contact')}
      />

      <section ref={homeRef}>
        <Home onProject={() => scrollTo(projectRef, 'project')} />

      </section>

      <section ref={aboutRef}>
        <About onNext={()=>scrollTo(skillsRef)} />
      </section>

      <section ref={skillsRef}>
        <Skills onNext={()=>scrollTo(projectRef)} />
      </section>

      <section ref={projectRef}>
        <Project onNext={()=>scrollTo(contactRef)}/>
      </section>

      <section ref={contactRef}>
        <Contact onNext={()=>scrollTo(homeRef)}/>
      </section>
    </div>
  )
}

export default App