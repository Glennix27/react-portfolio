import {  useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Photo from './Photo/binus.png'

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
    }, 4000);
    return () => clearTimeout(timer);
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
        <div className="image-container">
          <img src={Photo} alt="Background" className="image-class" />
        </div>
      </div>
    </>
  )
}

export default Home
