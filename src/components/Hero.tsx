import { site } from '../config/site';
import { cx } from '../lib/cx';
import { SafeImage } from './SafeImage';

type Props = { revealed: boolean };

export function Hero({ revealed }: Props) {
  return (
    <section id="top" className={cx('hero', revealed && 'is-revealed')} aria-labelledby="hero-title">
      <div className="hero__media">
        <div className="hero__fallback" />
        <SafeImage
          sources={site.images.hero}
          alt="アルミニウムの表面処理・仕上げ加工の現場イメージ"
          className="hero__image"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow reveal-hero" style={{ ['--d' as string]: '0ms' }}>
          <span className="hero__eyebrow-line" />
          アルマイト加工・装飾仕上げ
        </p>

        <h1 id="hero-title" className="hero__title reveal-hero" style={{ ['--d' as string]: '120ms' }}>
          <span className="nowrap">アルミニウムの表面から、</span>
          <br />
          <span className="nowrap">ものづくりを支える。</span>
        </h1>

        <p className="hero__lead reveal-hero" style={{ ['--d' as string]: '260ms' }}>
          1962年、現代表・中島邦夫の両親が創業。アルミニウムの表面処理を専門に、アルマイト加工や装飾仕上げを通じて、部品の耐久性・耐食性・意匠性を高めています。微細な小型部品から外観品質が求められる化粧部品まで、精密な加工と細部へのこだわりで高品質を追求。多様な国籍のスタッフが培った技術と視点を生かし、ものづくりの伝統と品質を受け継いでいます。
        </p>

        <div className="hero__actions reveal-hero" style={{ ['--d' as string]: '400ms' }}>
          <a className="button button--primary" href="#works">
            製品・加工実績を見る
          </a>
          <a className="button button--ghost" href="#contact">
            お問い合わせ
          </a>
        </div>

        <dl className="hero__facts reveal-hero" style={{ ['--d' as string]: '520ms' }}>
          <div>
            <dt>創業</dt>
            <dd>{site.foundedYear}年</dd>
          </div>
          <div>
            <dt>事業内容</dt>
            <dd>{site.tagline}</dd>
          </div>
          <div>
            <dt>主な加工</dt>
            <dd>アルマイト加工・装飾仕上げ</dd>
          </div>
        </dl>
      </div>

      <a className="hero__scroll reveal-hero" style={{ ['--d' as string]: '700ms' }} href="#works">
        <span>スクロール</span>
        <i />
      </a>
    </section>
  );
}
