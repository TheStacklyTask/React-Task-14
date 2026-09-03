import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          <div>
            <Link className="brand footer-brand" to="/">
              <span className="brand-mark">RDH</span>
              <span>Travel</span>
            </Link>

            <p>
              Slow, considered trips built around a handful of destinations we
              genuinely believe are worth your time off.
            </p>
          </div>

          <div>
            <h5>Explore</h5>
            <Link to="/destinations">Destinations</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/trips">My Trips</Link>
          </div>

          <div>
            <h5>Company</h5>
            <Link to="/contact">Contact</Link>
            <span>Careers</span>
            <span>Press</span>
          </div>

          <div>
            <h5>Support</h5>
            <span>Booking help</span>
            <span>Cancellations</span>
            <span>Travel insurance</span>
          </div>

        </div>

        <div className="footer-bottom">
          <div>RDH Travel Studio</div>
        </div>

      </div>
    </footer>
  );
}