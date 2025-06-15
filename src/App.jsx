
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Project from './pages/Project'
import Skills from './pages/Skills'

function App() {

  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      {/* <Navbar/> */}
    </div>
  )
}

export default App
