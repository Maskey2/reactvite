import { useState } from 'react'
import Header from './components/Header'
import Experience from './components/Experience'
import Certification from './components/Certifications'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Leadership from './components/Leadership'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Header/>
     <Experience/>
     <Certification/>
     <Leadership/>
     <Footer/>
    </>
  )
}

export default App
