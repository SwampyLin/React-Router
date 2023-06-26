import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <span className='navbar-brand' href='#'>
          Navbar
        </span>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'red' : ''
                  }
                }}
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'red' : ''
                  }
                }}
                to='/about'
              >
                關於我
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'red' : ''
                  }
                }}
                to='/album'
              >
                相簿
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
