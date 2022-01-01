/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {forwardRef} from 'react';
import {useSelector} from 'react-redux';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';
import type {Color} from '@core/interfaces';
import {RootState} from '@store';

export type RadioProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  color?: Color;
};

export const Radio = forwardRef<HTMLInputElement>((props: RadioProps, ref): JSX.Element => {
  const {className, color = 'default', ...other} = props;
  const colors = useSelector((state: RootState) => state.settings.colors);
  const radioColor = color === 'default' ? 'gray' : colors[color];

  return (
    <input
      type='radio'
      ref={ref}
      className={clsx(
        `disabled:opacity-50 disabled:cursor-not-allowed
          bg-transparent h-6 w-6 border border-gray-300 rounded-full checked:border-transparent focus:outline-none
          checked:bg-${radioColor}-500 dark:checked:bg-${radioColor}-400
          hover:checked:bg-${radioColor}-600 dark:hover:check:bg-${radioColor}-500
          checked:focus:bg-${radioColor}-500 dark:checked:focus:bg-${radioColor}-400
          focus:ring-${radioColor}-500 dark:focus:ring-${radioColor}-400
          checked:focus:ring-${radioColor}-500 dark:checked:focus:ring-${radioColor}-400
          `,
        className,
      )}
      {...other}
    />
  );
}) as unknown as (props: RadioProps) => JSX.Element;
