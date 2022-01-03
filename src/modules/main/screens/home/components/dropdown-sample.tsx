import {Dropdown, DropDownItem} from '@core/components/dropdown';
import {Card} from '@core/components/card';
import {useState} from 'react';

export const DropdownSample = (): JSX.Element => {
  const options: DropDownItem[] = [
    {value: '1', text: 'Option 1'},
    {value: '2', text: 'Option 2'},
    {value: '3', text: 'Option 3'},
  ];
  const [value, setValue] = useState('');
  return (
    <Card title='Dropdown sample' className='mt-2'>
      <div className='form-control'>
        <Dropdown
          className='m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          className='input-primary m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          className='input-secondary m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          className='input-accent m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          className='input-success m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          className='input-warning m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          className='input-error m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          className='input-info m-1'
          options={options}
          value={value}
          setValue={setValue}
          placeholder='Please select value'
        />
        <Dropdown
          className='input-primary m-1'
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
