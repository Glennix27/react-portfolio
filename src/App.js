import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Layout from './components/Layout'
import './App.scss'
import transition from './transition'

function App() {
  const location = useLocation()
  const TransitionedLayout = transition(Layout)
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TransitionedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
