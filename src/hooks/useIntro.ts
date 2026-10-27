import { useCallback, useEffect, useState } from 'react';
import { prefersReducedMotion } from '../lib/motion';

export type IntroPhase = 'wait' | 'in' | 'out' | 'done';

const WAIT_MAX_MS = 1500; // ロゴ読み込みを待つ上限
const HOLD_MS = 2300; // ロゴを表示している時間
const OUT_MS = 1100; // 縮小・フェードアウトの時間

/** オープニング演出の進行を管理します。視覚効果を減らす設定の場合は即座に完了します。 */
export function useIntro() {
  const [phase, setPhase] = useState<IntroPhase>(() =>
    prefersReducedMotion() ? 'done' : 'wait',
  );

  const start = useCallback(() => setPhase((p) => (p === 'wait' ? 'in' : p)), []);

  useEffect(() => {
    if (phase === 'wait') {
      const t = window.setTimeout(start, WAIT_MAX_MS);
      return () => window.clearTimeout(t);
    }
    if (phase === 'in') {
      const t = window.setTimeout(() => setPhase('out'), HOLD_MS);
      return () => window.clearTimeout(t);
    }
    if (phase === 'out') {
      const t = window.setTimeout(() => setPhase('done'), OUT_MS);
      return () => window.clearTimeout(t);
    }
  }, [phase, start]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('is-intro', phase !== 'done');
    return () => root.classList.remove('is-intro');
  }, [phase]);

  return { phase, start };
}
