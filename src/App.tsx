import { Contact } from './components/Contact';
import { Facilities } from './components/Facilities';
import { FactoryGallery } from './components/FactoryGallery';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSplash } from './components/IntroSplash';
import { nav } from './config/site';
import { useActiveSection } from './hooks/useActiveSection';
import { useIntro } from './hooks/useIntro';

const SECTION_IDS = nav.map((item) => item.id);

export default function App() {
  const { phase, start } = useIntro();
  const active = useActiveSection(SECTION_IDS);
  const revealed = phase === 'out' || phase === 'done';

  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <IntroSplash phase={phase} onLogoSettled={start} />
      <Header active={active} />
      <main id="main">
        <Hero revealed={revealed} />
        <Gallery />
        <FactoryGallery />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
