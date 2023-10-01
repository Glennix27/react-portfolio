import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
  faLaravel,
  faCss3,
  faPhp,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import backgroundImage from './Photo/Paris.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray1 = ['G', 'l', 'e', 'n', 'n', 'i', 'x']
  const nameArray2 = [
    'X',
    'a',
    'v',
    'e',
    'r',
    'i',
    'u',
    's',
    '',
    'M',
    'a',
    'r',
    'l',
    'o',
    'w',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray1}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray2}
              idx={15}
            />
            <br />
          </h1>
          <h2>Undergraduate from Bina Nusantara University</h2>
          <Link to="/about" className="flat-button">
            ABOUT ME
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

export default Home
