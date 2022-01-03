/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {useState} from 'react';
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon';
import {Input} from './input';

export interface DropDownItem {
  text: string;
  value: string;
}

export type DropdownProps = {
  options: DropDownItem[];
  value: string;
  setValue: (value: string) => void;
  className?: string;
  placeholder?: string;
  containerClassName?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
};

export const Dropdown = (props: DropdownProps): JSX.Element => {
  const {options, value, setValue, className, containerClassName, placeholder, defaultOpen, disabled} = props;
  const [open, setOpen] = useState(defaultOpen);
  const displayText = options.find((item) => item.value === value)?.text;

  const selectValue = (valueSelected: string): void => {
    setValue(valueSelected);
    setOpen(false);
  };

  return (
    <div className={clsx('dropdown relative', open ? 'dropdown-open' : '', containerClassName)}>
      <Input
        className={clsx('w-full', className)}
        placeholder={placeholder}
        readOnly
        value={displayText}
        disabled={disabled}
        onClick={() => setOpen(!open)}
      />
      <ul
        className={clsx(
          `w-full p-2 shadow-xl menu dropdown-content
          bg-base-100 dark:bg-gray-700 rounded-box`,
          open ? '' : 'hidden',
        )}
      >
        {options.map((item) => (
          <li key={item.value} className={clsx('dark:hover:bg-gray-500')}>
            <a onClick={() => selectValue(item.value)} aria-hidden='true'>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <ChevronDownIcon className='absolute w-6 h-6 right-2 top-4 dark:text-gray-300' />
    </div>
  );
};
