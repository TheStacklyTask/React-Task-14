import { NavLink, Outlet } from 'react-router-dom';

const categories = [
  { to: '/experiences', label: 'All', end: true },
  { to: '/experiences/nature', label: 'Nature' },
  { to: '/experiences/culture', label: 'Culture' },
  { to: '/experiences/food', label: 'Food' },
  { to: '/experiences/water', label: 'Water' },
];

export default function Experiences() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Experiences</p>
          <h1>Half-day and full-day moments, booked on their own.</h1>
          <p>
            Already have a trip planned? Add a single guided experience without booking a
            full itinerary.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <nav className="experience-tabs">
            {categories.map((category) => (
              <NavLink key={category.to} to={category.to} end={category.end}>
                {category.label}
              </NavLink>
            ))}
          </nav>

          <Outlet />
        </div>
      </section>
    </div>
  );
}
