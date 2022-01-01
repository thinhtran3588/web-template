/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {forwardRef} from 'react';
import {useSelector} from 'react-redux';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';
import type {Color} from '@core/interfaces';
import {RootState} from '@store';

export type TextInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  color?: Color;
};

export const TextInput = forwardRef<HTMLInputElement>((props: TextInputProps, ref): JSX.Element => {
  const {className, color = 'default', ...other} = props;
  const colors = useSelector((state: RootState) => state.settings.colors);
  const TextInputColor = color === 'default' ? 'gray' : colors[color];
  return (
    <input
      ref={ref}
      className={clsx(
        `disabled:opacity-50 disabled:cursor-not-allowed px-2 py-1
          bg-transparent border border-gray-300 rounded-full checked:border-transparent focus:outline-none
          focus:ring-${TextInputColor}-500 dark:focus:ring-${TextInputColor}-400
          focus:border-${TextInputColor}-500 dark:focus:border-${TextInputColor}-400
          `,
        className,
      )}
      {...other}
    />
  );
}) as unknown as (props: TextInputProps) => JSX.Element;
