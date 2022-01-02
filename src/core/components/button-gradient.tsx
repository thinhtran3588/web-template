/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export type ButtonGradientProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ButtonGradient = forwardRef<HTMLButtonElement>((props: ButtonGradientProps, ref): JSX.Element => {
  const {className = '', type = 'button', children, ...other} = props;

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        `btn rounded-full`,
        className.includes('btn-ghost') ? 'dark:hover:bg-gray-600' : '',
        other.disabled
          ? 'dark:text-gray-500'
          : `bg-gradient-to-r from-primary to-secondary border-0 hover:from-primary-focus hover:to-secondary-focus`,
        className,
      )}
      {...other}
    >
      {children}
    </button>
  );
}) as (props: ButtonGradientProps) => JSX.Element;
