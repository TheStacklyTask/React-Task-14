import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-content">
      <div className="container not-found">
        <h1>404</h1>
        <h3>This trail doesn&apos;t lead anywhere</h3>
        <p style={{ color: 'var(--color-clay)', marginTop: '0.75rem' }}>
          The page you&apos;re looking for may have moved or never existed.
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1.75rem' }}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
