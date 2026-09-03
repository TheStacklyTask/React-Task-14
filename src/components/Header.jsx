import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTravel } from '../context/TravelContext';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/destinations', label: 'Destinations' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/trips', label: 'My Trips' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { state, dispatch } = useTravel();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"> RDH </span>
          <span>Travel</span>
        </NavLink>

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="currency-toggle">
            {['USD', 'EUR', 'INR'].map((code) => (
              <button
                key={code}
                type="button"
                className={state.currency === code ? 'active' : ''}
                onClick={() => dispatch({ type: 'SET_CURRENCY', payload: code })}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav container ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {state.notice && <div className="notice-banner">{state.notice}</div>}
    </header>
  );
}
