/* eslint-disable react/jsx-props-no-spreading */
import {forwardRef, HTMLAttributes, LabelHTMLAttributes} from 'react';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';
import clsx from 'clsx';

export type RadioProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  title?: string;
  containerAttributes?: LabelHTMLAttributes<HTMLLabelElement>;
  titleAttributes?: HTMLAttributes<HTMLSpanElement>;
};

export const Radio = forwardRef((props: RadioProps, ref): JSX.Element => {
  const {containerAttributes, titleAttributes, title, id, className, ...other} = props;
  const {className: labelClassName, htmlFor, ...otherContainerAttributes} = containerAttributes || {};
  const {className: spanClassName, ...otherTitleAttributes} = titleAttributes || {};
  return (
    <label
      className={clsx(
        'cursor-pointer flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700',
        labelClassName || '',
      )}
      htmlFor={htmlFor || id}
      {...otherContainerAttributes}
    >
      <input
        ref={ref}
        id={id}
        type='radio'
        className={clsx('radio dark:border-gray-600', className || '')}
        {...other}
      />
      <span className={clsx('label-text ml-2 dark:text-gray-300', spanClassName || '')} {...otherTitleAttributes}>
        {title}
      </span>
    </label>
  );
}) as (props: RadioProps) => JSX.Element;
