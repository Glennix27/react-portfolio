import { useState, useEffect } from 'react'
import {
  faLaravel,
  faCss3,
  faPhp,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './index.scss'
import transition from '../../transition'
import backgroundVideo from './Photo/video2.mp4'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container about-page">
        <div className="text-cont">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I'm an Undergraduate from Bina Nusantara University majoring in
              Computer Science degree. I'm still working on my web development
              skills and would love to learn more about web development. Other
              than learning about web development I would also love to learn
              about the working environment.
            </p>
            <p align="LEFT">
              I specialize in Software engineering, especially full-stack web
              development. I also have the privilege to work with an amazing
              team on my project and will continue to progress on my journey in
              web development.
            </p>
            <Link to="/projects" className="flat-button">
              MY PROJECTS
            </Link>
          </div>
        </div>

        <div className="stage-cube-cont">
          <h1 className="skill-text">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLaravel} color="#red" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPhp} color="#DarkBlue" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default transition(About)
