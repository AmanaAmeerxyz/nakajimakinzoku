import { Reveal } from './Reveal';

function ItemList({ items }: { items: readonly string[] }) {
  return (
    <ul className="facilities__item-list">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

export function Facilities() {
  return (
    <section className="section section--soft facilities-section" aria-labelledby="facilities-title">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2 id="facilities-title" className="section-head__title">
              主要加工品
            </h2>
          </header>
        </Reveal>

        <div className="facilities__categories">
          <Reveal className="facilities__category">
            <ItemList items={['化粧品容器', '自動車部品', '電気部品']} />
          </Reveal>

          <Reveal className="facilities__category" delay={70}>
            <ItemList items={['文具・その他雑貨', '機械部品']} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
