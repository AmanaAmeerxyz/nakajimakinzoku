import { site } from '../config/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">{site.name}</p>
        <p className="footer__copy">© {new Date().getFullYear()} {site.name}　無断転載を禁じます。</p>
      </div>
    </footer>
  );
}
