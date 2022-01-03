/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {TextareaHTMLAttributes, DetailedHTMLProps} from 'react';

export type TextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const TextArea = forwardRef((props: TextAreaProps, ref): JSX.Element => {
  const {className = '', children, ...other} = props;

  return (
    <textarea
      ref={ref}
      className={clsx(
        `textarea textarea-bordered rounded-3xl dark:bg-gray-700`,
        other.disabled ? ' dark:text-gray-500' : '',
        className,
      )}
      {...other}
    >
      {children}
    </textarea>
  );
}) as (props: TextAreaProps) => JSX.Element;
