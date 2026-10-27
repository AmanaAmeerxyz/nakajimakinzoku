import { site } from '../config/site';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact">
        <Reveal className="contact__intro">
          <header className="section-head">
            <p className="section-head__eyebrow">
              <span className="section-head__no">03</span>
              ご相談はこちら
            </p>
            <h2 id="contact-title" className="section-head__title">
              お問い合わせ
            </h2>
            <p className="section-head__lead">
              アルミニウムの表面処理に関するご相談は、お電話またはFAXにてお気軽にお問い合わせください。
            </p>
          </header>
          <div className="contact__actions">
            <a className="button button--primary" href={`tel:${site.phone.tel}`}>
              電話をかける
            </a>
            <a className="button button--ghost" href={site.mapUrl} target="_blank" rel="noopener noreferrer">
              地図を見る
              <span className="visually-hidden">（新しいタブで開きます）</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="contact__card-wrap" delay={120}>
          <dl className="contact__card">
            <div className="contact__row">
              <dt>電話</dt>
              <dd>
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
              </dd>
            </div>
            <div className="contact__row">
              <dt>FAX</dt>
              <dd>{site.fax}</dd>
            </div>
            <div className="contact__row">
              <dt>住所</dt>
              <dd>
                <address>
                  {site.postalCode}
                  <br />
                  {site.address}
                </address>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
