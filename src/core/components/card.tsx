import clsx from 'clsx';
import {useSelector} from 'react-redux';
import type {RootState} from '@store';

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
  const primaryColor = useSelector((state: RootState) => state.settings.colors?.primary);
  const secondaryColor = useSelector((state: RootState) => state.settings.colors?.secondary);
  return (
    <div className={clsx('bg-white dark:bg-gray-800 shadow-xl p-2 rounded-md', className)}>
      {Boolean(title) && !CustomHeader && (
        <div
          className={clsx(
            headerClassName,
            `font-semibold -mx-2 -mt-2 rounded-t-md p-2 bg-gradient-to-r 
              from-${primaryColor}-500 to-${secondaryColor}-500 
              dark:from-${primaryColor}-400 dark:to-${secondaryColor}-400
            text-white dark:text-gray-100`,
          )}
        >
          {title}
        </div>
      )}
      {CustomHeader}
      <div className={clsx('', contentClassName)}>{children}</div>
      {CustomFooter}
    </div>
  );
};
