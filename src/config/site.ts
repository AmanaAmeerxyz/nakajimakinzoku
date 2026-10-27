/**
 * サイト設定ファイル
 * ------------------------------------------------------------
 * 画像は /public/images/ に配置するだけで差し替えられます。
 * ファイルが無い場合でも、サイトは上品な代替表示で正常に動作します。
 *
 *   ロゴ        : public/images/logo.svg（または logo.png / logo.webp）
 *   ヒーロー画像: public/images/hero.jpg（または hero.webp / hero.png）
 *   実績写真    : public/images/gallery/work-01.jpg 〜 work-06.jpg
 *
 * 別のファイル名・拡張子を使う場合は、下記のパスを書き換えてください。
 */

const BASE = import.meta.env.BASE_URL;
const img = (path: string) => `${BASE}images/${path}`;
const publicAsset = (path: string) => `${BASE}${path}`;
const imageCandidates = (name: string) =>
  ['jpg', 'jpeg', 'png', 'webp', 'svg'].map((extension) => img(`${name}.${extension}`));

export const site = {
  name: '中島金属',
  tagline: 'アルミニウム表面処理',
  foundedYear: 1962,
  phone: { display: '048-948-6874', tel: '+81489486874' },
  fax: '048-948-6875',
  postalCode: '〒340-0002',
  address: '埼玉県草加市青柳2-4-7',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('埼玉県草加市青柳2-4-7'),
  /** 先頭から順に読み込みを試し、すべて無ければ文字ロゴを表示します。 */
  images: {
    logo: [publicAsset('logo img1.jpeg'), ...imageCandidates('img1'), img('logo.svg'), img('logo.png'), img('logo.webp')],
    hero: [publicAsset('factory img2.jpeg'), img('hero.jpg'), img('hero.webp'), img('hero.png')],
  },
} as const;

export const nav = [
  { id: 'top', label: 'トップ' },
  { id: 'works', label: '製品・加工実績' },
  { id: 'contact', label: 'お問い合わせ' },
] as const;

export type Work = {
  id: string;
  /** public/images/ から順に読み込む画像パス */
  image: readonly string[];
  /** 画像の代替テキスト（実際の写真に合わせて書き換えてください） */
  alt: string;
  /** カードの見出し（品名・分類など） */
  title: string;
  /** カードの説明文（加工内容・用途など） */
  caption: string;
};

/**
 * 製品・加工実績ギャラリー
 * 写真を差し替え、title / caption / alt を実際の内容に編集してください。
 */
export const works: Work[] = [
  {
    id: '01',
    image: [publicAsset('product img4.jpg'), ...imageCandidates('img4')],
    alt: 'アルミニウム部品の表面処理事例の写真（01）',
    title: '加工実績 01（品名を入力）',
    caption: '加工内容・用途などの説明をここに入力してください。',
  },
  {
    id: '02',
    image: [publicAsset('product img3.jpg'), ...imageCandidates('img3')],
    alt: 'アルミニウム部品の表面処理事例の写真（02）',
    title: '加工実績 02（品名を入力）',
    caption: '加工内容・用途などの説明をここに入力してください。',
  },
  {
    id: '03',
    image: [img('gallery/work-03.jpg')],
    alt: 'アルミニウム部品の表面処理事例の写真（03）',
    title: '加工実績 03（品名を入力）',
    caption: '加工内容・用途などの説明をここに入力してください。',
  },
  {
    id: '04',
    image: [img('gallery/work-04.jpg')],
    alt: 'アルミニウム部品の表面処理事例の写真（04）',
    title: '加工実績 04（品名を入力）',
    caption: '加工内容・用途などの説明をここに入力してください。',
  },
  {
    id: '05',
    image: [img('gallery/work-05.jpg')],
    alt: 'アルミニウム部品の表面処理事例の写真（05）',
    title: '加工実績 05（品名を入力）',
    caption: '加工内容・用途などの説明をここに入力してください。',
  },
  {
    id: '06',
    image: [img('gallery/work-06.jpg')],
    alt: 'アルミニウム部品の表面処理事例の写真（06）',
    title: '加工実績 06（品名を入力）',
    caption: '加工内容・用途などの説明をここに入力してください。',
  },
];
