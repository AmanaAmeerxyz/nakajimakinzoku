import { useEffect, useRef, useState } from 'react';
import type { ImgHTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'onError' | 'onLoad'> & {
  /** 先頭から順に試す画像パス。すべて失敗した場合は fallback を表示します。 */
  sources: readonly string[];
  fallback?: ReactNode;
  /** 読み込みの成否が確定したときに呼ばれます。 */
  onSettled?: (ok: boolean) => void;
};

/** 画像ファイルが未配置でもレイアウトを崩さない画像コンポーネント。 */
export function SafeImage({ sources, fallback = null, onSettled, className, alt, ...rest }: Props) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const settled = useRef(false);
  const failed = index >= sources.length;

  useEffect(() => {
    if (failed && !settled.current) {
      settled.current = true;
      onSettled?.(false);
    }
  }, [failed, onSettled]);

  if (failed) return <>{fallback}</>;

  return (
    <img
      {...rest}
      alt={alt}
      className={cx('safe-img', loaded && 'is-loaded', className)}
      src={sources[index]}
      onLoad={() => {
        setLoaded(true);
        if (!settled.current) {
          settled.current = true;
          onSettled?.(true);
        }
      }}
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
