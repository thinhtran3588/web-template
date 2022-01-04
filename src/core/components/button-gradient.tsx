/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import type {ColorVariant} from '@core/interfaces';

export type ButtonGradientProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variantFrom?: ColorVariant;
  variantTo?: ColorVariant;
};

export const ButtonGradient = forwardRef((props: ButtonGradientProps, ref): JSX.Element => {
  const {variantFrom = 'primary', variantTo = 'secondary', className = '', type = 'button', children, ...other} = props;
  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        `btn rounded-full min-w-10`,
        className.includes('btn-ghost') ? 'dark:hover:bg-gray-600' : '',
        other.disabled
          ? 'dark:text-gray-500'
          : `bg-gradient-to-r border-0
          from-${variantFrom} hover:from-${variantFrom}-focus
          to-${variantTo} hover:to-${variantTo}-focus`,
        className,
      )}
      {...other}
    >
      {children}
    </button>
  );
}) as (props: ButtonGradientProps) => JSX.Element;

/**
 * css classes required by Tailwindcss
 * from-primary hover:from-primary-focus from-secondary hover:from-secondary-focus from-accent hover:from-accent-focus
 * from-success hover:from-success-focus from-warning hover:from-warning-focus
 * from-error hover:from-error-focus from-info hover:from-info-focus
 * to-primary hover:to-primary-focus to-secondary hover:to-secondary-focus to-accent hover:to-accent-focus
 * to-success hover:to-success-focus to-warning hover:to-warning-focus
 * to-error hover:to-error-focus to-info hover:to-info-focus
 */
