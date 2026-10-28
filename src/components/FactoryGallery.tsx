import { Reveal } from './Reveal';

const factoryImages = [
  { name: 'Team 1', src: 'team1.jpeg' },
  { name: 'Team 2', src: 'team2.jpeg' },
  { name: 'Team 3', src: 'team3.jpeg' },
  { name: 'Team 4', src: 'team4.jpeg' },
  { name: 'Team 5', src: 'team5.jpeg' },
  { name: 'Team 6', src: 'team6.jpeg' },
  { name: 'Team 8', src: 'tam8.jpeg' },
  { name: 'Team 9', src: 'team9.jpeg' },
] as const;

export function FactoryGallery() {
  return (
    <section className="section section--soft factory-section" aria-labelledby="factory-title">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2 id="factory-title" className="section-head__title">
              工場のご紹介
            </h2>
          </header>
        </Reveal>

        <ul className="factory-gallery">
          {factoryImages.map(({ name, src }, index) => (
            <li key={name}>
              <Reveal delay={(index % 4) * 70}>
                <figure className="factory-gallery__item">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${src}`}
                    alt={`工場の様子（${name}）`}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
