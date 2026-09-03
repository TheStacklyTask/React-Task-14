import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import destinations from '../data/destinations';
import { useTravel } from '../context/TravelContext';

const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useTravel();

  const search = searchParams.get('search') || '';
  const region = searchParams.get('region') || 'All';

  function updateParams(next) {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([key, value]) => {
      if (value && value !== 'All') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  }

  const filtered = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch =
        !search ||
        destination.name.toLowerCase().includes(search.toLowerCase()) ||
        destination.country.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = region === 'All' || destination.region === region;
      const matchesSaved = !state.savedOnly || state.savedDestinations.includes(destination.id);
      return matchesSearch && matchesRegion && matchesSaved;
    });
  }, [search, region, state.savedOnly, state.savedDestinations]);

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Destinations</p>
          <h1>Eight regions, chosen on purpose.</h1>
          <p>
            Filter by region or search by name. Save the ones you&apos;re considering — they&apos;ll
            stay saved as you browse.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="filters-bar">
            <div className="filters-bar__search">
              <span aria-hidden="true">&#128269;</span>
              <input
                type="text"
                placeholder="Search by destination or country"
                value={search}
                onChange={(event) => updateParams({ search: event.target.value })}
                aria-label="Search destinations"
              />
            </div>

            <div className="region-pills">
              {regions.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`region-pill ${region === item ? 'active' : ''}`}
                  onClick={() => updateParams({ region: item })}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="saved-toggle">
              <input
                type="checkbox"
                checked={state.savedOnly}
                onChange={() => dispatch({ type: 'TOGGLE_SAVED_ONLY' })}
              />
              Saved only
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <h3>No destinations match yet</h3>
              <p>Try a different region or clear your search.</p>
            </div>
          ) : (
            <div className="destination-grid">
              {filtered.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
