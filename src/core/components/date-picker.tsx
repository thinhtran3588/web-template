/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {forwardRef} from 'react';
import ReactDatePicker from 'react-datepicker';
import {Input, InputProps} from './input';
import 'react-datepicker/dist/react-datepicker.css';

export type DatePickerProps = React.ComponentProps<typeof ReactDatePicker>;

export const DatePicker = forwardRef((props: DatePickerProps, ref): JSX.Element => {
  const {customInput, className, ...other} = props;
  const CustomInput = forwardRef(({value, onClick}, inputRef) => (
    <Input onClick={onClick} ref={inputRef} defaultValue={value as string} className={clsx('w-full', className)} />
  )) as (inputProps: InputProps) => JSX.Element;
  return <ReactDatePicker ref={ref as any} customInput={customInput || <CustomInput />} {...other} />;
}) as (props: DatePickerProps) => JSX.Element;
