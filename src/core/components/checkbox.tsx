/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {forwardRef} from 'react';
import {useSelector} from 'react-redux';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';
import type {Color} from '@core/interfaces';
import {RootState} from '@store';

export type CheckboxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  color?: Color;
};

export const Checkbox = forwardRef<HTMLInputElement>((props: CheckboxProps, ref): JSX.Element => {
  const {className, color = 'default', ...other} = props;
  const colors = useSelector((state: RootState) => state.settings.colors);
  const checkboxColor = color === 'default' ? 'gray' : colors[color];
  return (
    <input
      type='checkbox'
      ref={ref}
      className={clsx(
        `disabled:opacity-50 disabled:cursor-not-allowed
          bg-transparent h-6 w-6 border border-gray-300 rounded-md checked:border-transparent focus:outline-none
          checked:bg-${checkboxColor}-500 dark:checked:bg-${checkboxColor}-400
          hover:checked:bg-${checkboxColor}-600 dark:hover:check:bg-${checkboxColor}-500
          checked:focus:bg-${checkboxColor}-500 dark:checked:focus:bg-${checkboxColor}-400
          focus:ring-${checkboxColor}-500 dark:focus:ring-${checkboxColor}-400
          checked:focus:ring-${checkboxColor}-500 dark:checked:focus:ring-${checkboxColor}-400
          `,
        className,
      )}
      {...other}
    />
  );
}) as unknown as (props: CheckboxProps) => JSX.Element;
