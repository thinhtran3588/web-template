/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import {useSelector} from 'react-redux';
import type {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import type {Color} from '@core/interfaces';
import {RootState} from '@store';
import {Loading} from './loading';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: Color | 'default';
  variant?: 'contained' | 'outline';
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement>((props: ButtonProps, ref): JSX.Element => {
  const {className, children, color = 'default', variant = 'contained', loading = false, disabled, ...other} = props;
  const colors = useSelector((state: RootState) => state.settings.colors);
  const buttonColor = color === 'default' ? 'gray' : colors[color];

  return (
    <button
      ref={ref}
      className={clsx(
        `disabled:opacity-50 disabled:cursor-not-allowed rounded-full font-bold 
          flex items-center justify-center px-4 py-1 marker:py-2
          border-2 border-${buttonColor}-500 dark:border-${buttonColor}-400
          hover:border-${buttonColor}-600 dark:hover:border-${buttonColor}-500
          shadow-md hover:shadow-xl
          `,
        variant === 'contained'
          ? `text-white dark:text-gray-100 bg-${buttonColor}-500 dark:bg-${buttonColor}-400
              hover:bg-${buttonColor}-600 dark:hover:bg-${buttonColor}-500`
          : `text-${buttonColor}-500 dark:text-${buttonColor}-400
              hover:text-${buttonColor}-600 dark:text:border-${buttonColor}-500`,
        className,
      )}
      disabled={loading || disabled}
      {...other}
    >
      {loading && (
        <Loading
          className={clsx(
            'mr-2 h-6 w-6',
            variant === 'contained'
              ? 'text-white dark:text-white'
              : `text-${buttonColor}-500 dark:text-${buttonColor}-400`,
          )}
        />
      )}
      <span>{children}</span>
    </button>
  );
}) as unknown as (props: ButtonProps) => JSX.Element;
