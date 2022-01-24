import clsx from 'clsx';
import type {ColorVariant} from '@core/interfaces';

export interface CardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  CustomHeader?: React.ReactNode;
  headerVariantFrom?: ColorVariant;
  headerVariantTo?: ColorVariant;
}

export const Card = (props: CardProps): JSX.Element => {
  const {
    title,
    className,
    headerClassName,
    contentClassName,
    CustomHeader,
    headerVariantFrom = 'primary',
    headerVariantTo = 'secondary',
    children,
  } = props;
  return (
    <div className={clsx('transition-colors duration-500 bg-white dark:bg-gray-800 shadow-xl rounded-md', className)}>
      {Boolean(title) && !CustomHeader && (
        <div
          className={clsx(
            `font-semibold rounded-t-md p-2 bg-gradient-to-r
              from-${headerVariantFrom} to-${headerVariantTo} text-${headerVariantFrom}-content`,
            headerClassName,
          )}
        >
          {title}
        </div>
      )}
      {CustomHeader}
      <div className={clsx('p-2', contentClassName)}>{children}</div>
    </div>
  );
};

/**
 * css classes required by Tailwindcss
 * from-primary from-secondary from-accent
 * from-success from-warning from-error from-info
 * to-primary to-secondary to-accent
 * to-success to-warning to-error to-info
 * text-primary-content text-secondary-content text-accent-content
 * text-success-content text-warning-content text-error-content text-info-content
 */
