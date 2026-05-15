import { NavLink } from 'react-router-dom'
import './NavBar.css'

const links = [
  { to: '/',            label: 'Home'        },
  { to: '/foundations', label: 'Foundations' },
  { to: '/about',       label: 'Documentation' },
]

function NavBar() {
  return (
    <nav className="navbar">
      <span className="navbar__brand">Emotion DS</span>
      <ul className="navbar__links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
