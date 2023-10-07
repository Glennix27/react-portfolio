import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
// import transition from '../../transition'

const Layout = () => {
  // const TransitionedOutlet = transition(Outlet)
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <span className="tags bottom-tags"></span>
      </div>
    </div>
  )
}

export default Layout
