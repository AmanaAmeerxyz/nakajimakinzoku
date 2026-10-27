import { works } from '../config/site';
import { Reveal } from './Reveal';
import { SafeImage } from './SafeImage';

function Placeholder() {
  return (
    <div className="work__placeholder" role="img" aria-label="写真は準備中です">
      <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" focusable="false">
        <rect x="6" y="10" width="36" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="21" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 36l11-10 8 7 6-5 9 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span>画像準備中</span>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="works" className="section section--soft" aria-labelledby="works-title">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <p className="section-head__eyebrow">
              <span className="section-head__no">02</span>
              ギャラリー
            </p>
            <h2 id="works-title" className="section-head__title">
              製品・加工実績
            </h2>
            <p className="section-head__lead">
              アルミニウムの表面処理を施した製品・部品の加工実績をご紹介します。
            </p>
          </header>
        </Reveal>

        <ul className="works">
          {works.map((work, i) => (
            <li key={work.id} className="works__item">
              <Reveal delay={(i % 3) * 90}>
                <figure className="work">
                  <div className="work__frame">
                    <Placeholder />
                    <SafeImage
                      sources={[work.image]}
                      alt={work.alt}
                      className="work__image"
                      loading="lazy"
                      decoding="async"
                      fallback={null}
                    />
                  </div>
                  <figcaption className="work__caption">
                    <span className="work__no">{work.id}</span>
                    <div>
                      <h3 className="work__title">{work.title}</h3>
                      <p className="work__text">{work.caption}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
