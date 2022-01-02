import {Card} from '@core/components/card';
import type {ChangeEvent} from 'react';

export interface Option {
  value: string;
  text: string;
}

export interface BaseSettingsProps {
  title: string;
  currentValue: string;
  setValue: (theme: string) => void;
  options: Option[];
  name: string;
}

export const BaseSettings = (props: BaseSettingsProps): JSX.Element => {
  const {currentValue, setValue, title, options, name} = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <Card title={title} className='mb-2'>
      {options.map((option) => (
        <label
          className={`inline-flex py-2 pl-2 items-center h-10 w-full cursor-pointer 
            hover:bg-gray-100 dark:hover:bg-gray-700`}
          key={option.value}
          htmlFor={`rd-${name}-${option.value}`}
        >
          <input
            id={`rd-${name}-${option.value}`}
            type='radio'
            className='radio radio-primary radio-sm'
            name={name}
            value={option.value}
            checked={currentValue === option.value}
            onChange={onChange}
          />
          <span className='ml-2'>{option.text}</span>
        </label>
      ))}
    </Card>
  );
};
