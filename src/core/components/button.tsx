/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import type {ColorVariant} from '@core/interfaces';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: ColorVariant | 'ghost' | 'link';
  outline?: boolean;
};

export const Button = forwardRef((props: ButtonProps, ref): JSX.Element => {
  const {variant, className = '', type = 'button', outline, children, ...other} = props;

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        `btn rounded-full min-w-10`,
        variant === 'ghost' ? 'dark:hover:bg-gray-600 dark:text-white dark:border-gray-800' : '',
        variant === 'link' ? `dark:text-primary dark:border-transparent` : '',
        variant ? '' : 'dark:bg-gray-700 dark:text-primary-content dark:border-transparent dark:hover:bg-gray-600',
        variant ? `btn-${variant}` : '',
        outline ? `btn-outline` : '',
        other.disabled ? 'dark:text-gray-500 border-transparent' : '',
        className,
      )}
      {...other}
    >
      {children}
    </button>
  );
}) as (props: ButtonProps) => JSX.Element;

/**
 * css classes required by Tailwindcss
 * btn-primary btn-secondary btn-accent
 * btn-success btn-warning btn-error btn-info
 * btn-ghost btn-link
 */
