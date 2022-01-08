import {Dropdown} from '@core/components/dropdown';
import {Card} from '@core/components/card';
import {useState} from 'react';
import type {Option} from '@core/interfaces';

export const DropdownSample = (): JSX.Element => {
  const options: Option[] = [
    {value: '1', text: 'Option 1'},
    {value: '2', text: 'Option 2'},
    {value: '3', text: 'Option 3'},
  ];
  const [value, setValue] = useState('');
  return (
    <Card title='Dropdown sample' className='mt-2'>
      <div className='form-control'>
        <Dropdown
          containerClassName='m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          containerClassName='m-1'
          variant='primary'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          containerClassName='m-1'
          variant='secondary'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          containerClassName='m-1'
          variant='accent'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          containerClassName='m-1'
          variant='success'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          containerClassName='m-1'
          variant='warning'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          containerClassName='m-1'
          variant='error'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          containerClassName='m-1'
          variant='info'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          containerClassName='m-1'
          variant='primary'
          disabled
          options={options}
          value={value}
          setValue={setValue}
          placeholder='(disabled)'
        />
      </div>
    </Card>
  );
};
