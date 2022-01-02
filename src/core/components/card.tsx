import clsx from 'clsx';

export interface CardProps {
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  children?: React.ReactNode;
  CustomHeader?: React.ReactNode;
  CustomFooter?: React.ReactNode;
  title?: string;
}

export const Card = (props: CardProps): JSX.Element => {
  const {title, className, headerClassName, contentClassName, CustomHeader, CustomFooter, children} = props;
  return (
    <div className={clsx('transition-colors duration-500 bg-white dark:bg-gray-800 shadow-xl rounded-md', className)}>
      {Boolean(title) && !CustomHeader && (
        <div
          className={clsx(
            `font-semibold rounded-t-md p-2 bg-gradient-to-r from-primary to-secondary text-primary-content`,
            headerClassName,
          )}
        >
          {title}
        </div>
      )}
      {CustomHeader}
      <div className={clsx('p-2', contentClassName)}>{children}</div>
      {CustomFooter}
    </div>
  );
};
