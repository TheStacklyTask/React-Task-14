import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import DestinationCard from '../components/DestinationCard';
import ApiDemo from '../components/ApiDemo';
import destinations from '../data/destinations';

const highlights = [
  {
    title: 'Small-group departures',
    text: 'No more than ten travellers, so guides can actually adapt to the day.',
  },
  {
    title: 'Local trip designers',
    text: 'Every itinerary is shaped by someone who lives in the region.',
  },
  {
    title: 'Flexible dates',
    text: 'Shift your travel window up to 30 days out, at no extra cost.',
  },
  {
    title: 'Considered pace',
    text: 'Fewer stops, longer stays — we plan around rest, not rush.',
  },
];

const whyCards = [
  {
    title: 'Built around fewer, better trips',
    text: 'We carry a short list of destinations so each one gets real depth of local knowledge.',
  },
  {
    title: 'Transparent pricing',
    text: 'What you see at checkout is what you pay — no surprise resort fees or booking add-ons.',
  },
  {
    title: 'Real people to call',
    text: 'A trip designer is reachable by phone from the moment you book until you land home.',
  },
];

const stats = [
  { num: '48', label: 'Countries covered' },
  { num: '12k+', label: 'Trips designed' },
  { num: '4.8', label: 'Average trip rating' },
  { num: '96%', label: 'Travellers who rebook' },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('search', query.trim());
    navigate(`/destinations?${params.toString()}`);
  }

  const featured = destinations.slice(0, 6);

  return (
    <div className="page-content">
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="hero__eyebrow">Trips built around a handful of places, done properly</p>
            <h1>Travel that leaves room to actually arrive somewhere.</h1>
            <p className="hero__desc">
              RDH Travel designs slow, considered trips to eight regions we know closely —
              from the rice terraces above Ubud to the fjords of Lofoten. No rushed
              checklists, no forty-city itineraries.
            </p>

            <form className="search-box" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search a destination, e.g. Kyoto"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search destinations"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>

          <div className="hero__visual">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80"
              alt="Mountain lake at golden hour"
            />
            <div className="floating-card">
              <p className="floating-card__label">Now trending</p>
              <p className="floating-card__title">Torres del Paine, Chile</p>
              <p className="floating-card__meta">9 days &middot; From $1,520</p>
            </div>
          </div>
        </div>

        <div className="container highlights">
          {highlights.map((item) => (
            <div className="highlight-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Featured"
            title="Destinations people keep returning to"
            description="A short list, deliberately. Every trip on RDH Travel has been walked, tasted, and slept in by our own trip designers."
          />
          <div className="destination-grid">
            {featured.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          <div className="section-cta">
            <button type="button" className="btn btn-outline" onClick={() => navigate('/destinations')}>
              See all destinations
            </button>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionTitle eyebrow="Why RDH Travel" title="A smaller, more considered way to book travel" />
          <div className="why-grid">
            {whyCards.map((card) => (
              <div className="why-card" key={card.title}>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <div className="stats-band">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <p className="stat-num">{stat.num}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ApiDemo />
        </div>
      </section>
    </div>
  );
}
