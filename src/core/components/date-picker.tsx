/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {forwardRef} from 'react';
import CalendarIcon from '@heroicons/react/outline/CalendarIcon';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type {ColorVariant} from '@core/interfaces';
import {Input, InputProps} from './input';

export type DatePickerProps = React.ComponentProps<typeof ReactDatePicker> & {
  variant?: ColorVariant;
};

export const DatePicker = forwardRef((props: DatePickerProps, ref): JSX.Element => {
  const {customInput, className, disabled, variant, ...other} = props;
  const CustomInput = forwardRef(({value, onClick}, inputRef) => (
    <span className='inline-block w-full relative'>
      <Input
        onClick={onClick}
        ref={inputRef}
        defaultValue={value as string}
        className={clsx('w-full', className)}
        readOnly
        disabled={disabled}
        variant={variant}
      />
      <CalendarIcon className='absolute h-6 w-6 right-2 top-4 pointer-events-none' />
    </span>
  )) as (inputProps: InputProps) => JSX.Element;
  return (
    <ReactDatePicker ref={ref as any} customInput={customInput || <CustomInput />} disabled={disabled} {...other} />
  );
}) as (props: DatePickerProps) => JSX.Element;
