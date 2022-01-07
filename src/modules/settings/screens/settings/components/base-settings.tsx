import {Card} from '@core/components/card';
import {Radio} from '@core/components/radio';
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
        <Radio
          value={option.value}
          title={option.text}
          name={name}
          id={`rd-${name}-${option.value}`}
          checked={currentValue === option.value}
          onChange={onChange}
          className='radio-primary'
          key={option.value}
        />
      ))}
    </Card>
  );
};
