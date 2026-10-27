import { site } from '../config/site';
import { SafeImage } from './SafeImage';

type Props = {
  className?: string;
  onSettled?: (ok: boolean) => void;
};

/** ロゴ画像。未配置の場合は文字ロゴを表示します。 */
export function Logo({ className, onSettled }: Props) {
  return (
    <SafeImage
      sources={site.images.logo}
      alt={`${site.name}のロゴ`}
      className={className}
      onSettled={onSettled}
      fallback={
        <span className={`wordmark ${className ?? ''}`} role="img" aria-label={`${site.name}のロゴ`}>
          {site.name}
        </span>
      }
    />
  );
}
