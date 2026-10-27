import type { IntroPhase } from '../hooks/useIntro';
import { Logo } from './Logo';

type Props = {
  phase: IntroPhase;
  onLogoSettled: () => void;
};

/** 初回表示のロゴ演出。中央に現れ、縮小しながら背景へ溶け込みます。 */
export function IntroSplash({ phase, onLogoSettled }: Props) {
  if (phase === 'done') return null;
  return (
    <div className="splash" data-phase={phase} aria-hidden="true">
      <div className="splash__inner">
        <Logo className="splash__logo" onSettled={onLogoSettled} />
        <span className="splash__rule" />
      </div>
    </div>
  );
}
