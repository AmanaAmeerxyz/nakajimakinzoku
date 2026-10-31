import { Reveal } from './Reveal';

const businessAreas = ['化粧品容器', '電気部品', '自動車部品', '文具・その他雑貨'];

const surfaceTreatments = [
  'アルマイト処理',
  '装飾アルマイト',
  '化学研磨（硝酸）',
  '化学サテン仕上げ',
  '染色処理',
  'グラデーション染色',
  '封孔処理',
  '自動研磨',
  'ダイヤモンドカット加工',
];

const equipment = [
  { name: 'アルマイト槽', quantity: '4基', specification: '各4,000リットル' },
  { name: '整流器', quantity: '4台', specification: '各4,000A' },
  { name: '自動研磨機' },
  { name: 'ダイヤモンドカット設備' },
  { name: 'アルゴン溶接機' },
  { name: '膜厚計（パーマスコープ）' },
];

const environmentalFacilities = [
  '全自動純水製造装置',
  '全自動硫酸回収装置',
  '全自動純水製造装置',
  '全自動リン酸回収装置',
  '排水処理施設一式',
];

const factoryInfrastructure = [
  { name: '変電設備' },
  { name: '受電設備容量', specification: '750 kVA' },
  { name: '補助設備' },
];

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
            <p className="section-head__eyebrow">事業と設備</p>
            <h2 id="facilities-title" className="section-head__title">
              設備・製造能力
            </h2>
            <p className="section-head__lead">
              事業分野、表面処理技術、主要設備および工場インフラをご紹介します。
            </p>
          </header>
        </Reveal>

        <div className="facilities__categories">
          <Reveal className="facilities__category">
            <section aria-labelledby="facilities-business-title">
              <h3 id="facilities-business-title" className="facilities__category-title">
                事業分野
              </h3>
              <ItemList items={businessAreas} />
            </section>
          </Reveal>

          <Reveal className="facilities__category" delay={70}>
            <section aria-labelledby="facilities-treatment-title">
              <h3 id="facilities-treatment-title" className="facilities__category-title">
                表面処理技術
              </h3>
              <ItemList items={surfaceTreatments} />
            </section>
          </Reveal>

          <Reveal className="facilities__category facilities__category--wide" delay={140}>
            <section aria-labelledby="facilities-equipment-title">
              <h3 id="facilities-equipment-title" className="facilities__category-title">
                主要設備・機械
              </h3>
              <ul className="facilities__equipment">
                {equipment.map(({ name, quantity, specification }) => (
                  <li className="facilities__equipment-card" key={name}>
                    <h4>{name}</h4>
                    {quantity && specification ? (
                      <p className="facilities__specification">
                        <strong>{quantity}</strong>
                        <span>{specification}</span>
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal className="facilities__category" delay={210}>
            <section aria-labelledby="facilities-environment-title">
              <h3 id="facilities-environment-title" className="facilities__category-title">
                環境・水処理設備
              </h3>
              <ItemList items={environmentalFacilities} />
            </section>
          </Reveal>

          <Reveal className="facilities__category" delay={280}>
            <section aria-labelledby="facilities-infrastructure-title">
              <h3 id="facilities-infrastructure-title" className="facilities__category-title">
                工場インフラ
              </h3>
              <ul className="facilities__item-list">
                {factoryInfrastructure.map(({ name, specification }) => (
                  <li className={specification ? 'facilities__infrastructure-spec' : undefined} key={name}>
                    <span>{name}</span>
                    {specification ? <strong>{specification}</strong> : null}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
