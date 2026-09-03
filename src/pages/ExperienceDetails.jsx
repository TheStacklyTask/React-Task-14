import { useParams } from 'react-router-dom';
import experiences from '../data/experiences';
import { useTravel } from '../context/TravelContext';

export default function ExperienceDetails() {
  const { category } = useParams();
  const { formatPrice } = useTravel();

  const filtered = category
    ? experiences.filter((item) => item.category === category)
    : experiences;

  if (filtered.length === 0) {
    return (
      <div className="empty-state">
        <h3>No experiences in this category yet</h3>
        <p>Check back soon, or browse another category.</p>
      </div>
    );
  }

  return (
    <div className="experience-grid">
      {filtered.map((experience) => (
        <article className="experience-card" key={experience.id}>
          <div className="experience-card__media">
            <img src={experience.image} alt={experience.title} />
          </div>
          <div className="experience-card__body">
            <p className="experience-card__category">{experience.category}</p>
            <h4>{experience.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#4d4f45' }}>{experience.location}</p>
            <div className="experience-card__meta">
              <span>{experience.duration}</span>
              <span className="price-tag">{formatPrice(experience.price)}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
