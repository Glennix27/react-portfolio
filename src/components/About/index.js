import { useState } from 'react'
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

const About = () => {
  const [letterClass] = useState('text-animate')

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  //   return setTimeout(timer);
  // }, [])

  return (
    <>
      <div className="container about-page">
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
            skill and would love to learn more about web development. Other than
            learning about web development i would also love to learn about
            working enviorment.
          </p>
          <p align="LEFT">
            I'm specialize in Software Enginerring especially full stack web
            development. I also have the previlages to work with amazing team on
            my project and will continue to progress on my journey in web
            development.
          </p>
          <Link to="/project" className="flat-button">
            MY PROJECTS
          </Link>
        </div>

        <div className="stage-cube-cont">
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

export default About
