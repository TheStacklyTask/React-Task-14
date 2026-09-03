import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import destinations from '../data/destinations';
import BookingModal from '../components/BookingModal';
import { useTravel } from '../context/TravelContext';

export default function DestinationDetails() {
  const { destinationId } = useParams();
  const { formatPrice } = useTravel();
  const [modalOpen, setModalOpen] = useState(false);

  const destination = destinations.find((item) => item.id === destinationId);

  if (!destination) {
    return (
      <div className="page-content">
        <div className="container not-found">
          <h1>404</h1>
          <p>We couldn&apos;t find that destination.</p>
          <Link to="/destinations" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            Back to destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div className="details-hero">
          <img src={destination.image} alt={`${destination.name}, ${destination.country}`} />
          <div className="details-hero__overlay">
            <div>
              <p style={{ color: '#f1ead9', marginBottom: '0.5rem' }}>{destination.country}</p>
              <h1>{destination.name}</h1>
            </div>
          </div>
        </div>

        <div className="details-layout">
          <div>
            <p style={{ fontSize: '1.05rem', color: '#3f4139' }}>{destination.description}</p>

            <div className="details-facts">
              <div className="fact-item">
                <p className="fact-label">Duration</p>
                <p className="fact-value">{destination.days} days</p>
              </div>
              <div className="fact-item">
                <p className="fact-label">Rating</p>
                <p className="fact-value">{'\u2605'} {destination.rating}</p>
              </div>
              <div className="fact-item">
                <p className="fact-label">Travel Style</p>
                <p className="fact-value">{destination.travelStyle}</p>
              </div>
              <div className="fact-item">
                <p className="fact-label">Best Period</p>
                <p className="fact-value">{destination.bestPeriod}</p>
              </div>
            </div>

            <h3>Trip highlights</h3>
            <ul className="highlight-list">
              {destination.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="booking-card">
            <p style={{ fontSize: '0.85rem', color: 'rgba(250,246,236,0.75)' }}>Starting from</p>
            <div className="price-line">
              <strong>{formatPrice(destination.price)}</strong>
              <span>per person</span>
            </div>
            <button type="button" className="btn btn-gold btn-block" onClick={() => setModalOpen(true)}>
              Request to Book
            </button>
            <p className="note">
              This reserves your spot with a trip designer — no payment is taken until your
              itinerary is confirmed.
            </p>
          </div>
        </div>
      </div>

      {modalOpen && <BookingModal destination={destination} onClose={() => setModalOpen(false)} />}
    </div>
  );
}
