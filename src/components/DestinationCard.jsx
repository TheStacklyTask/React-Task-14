import { Link } from 'react-router-dom';
import { useTravel } from '../context/TravelContext';

export default function DestinationCard({ destination }) {
  const { state, dispatch, formatPrice } = useTravel();
  const isSaved = state.savedDestinations.includes(destination.id);

  function handleSave() {
    dispatch({ type: 'TOGGLE_SAVE_DESTINATION', payload: destination.id });
    dispatch({
      type: 'SET_NOTICE',
      payload: isSaved
        ? `Removed ${destination.name} from saved trips`
        : `Saved ${destination.name} for later`,
    });
  }

  return (
    <article className="destination-card">
      <div className="destination-card__media">
        <img src={destination.image} alt={`${destination.name}, ${destination.country}`} />
        <button
          type="button"
          className={`save-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSave}
          aria-pressed={isSaved}
          aria-label={isSaved ? 'Remove from saved' : 'Save destination'}
        >
          {isSaved ? '\u2605' : '\u2606'}
        </button>
      </div>
      <div className="destination-card__body">
        <div className="destination-card__top">
          <h3>{destination.name}</h3>
          <span className="rating-pill">{'\u2605'} {destination.rating}</span>
        </div>
        <p className="destination-card__meta">
          {destination.country} &middot; {destination.days} days
        </p>
        <p className="destination-card__desc">{destination.description}</p>
        <div className="destination-card__footer">
          <span className="price-tag">
            {formatPrice(destination.price)} <span>from</span>
          </span>
          <Link to={`/destinations/${destination.id}`} className="link-arrow">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
