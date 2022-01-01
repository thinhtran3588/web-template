import {Card} from '@core/components/card';
import {TextInput, TextInputProps} from '@core/components/text-input';
import React from 'react';

export const InputSample = (): JSX.Element => (
  <Card title='input' className='mt-2'>
    <div className='pt-2 '>
      {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
        <React.Fragment key={color}>
          <label className='flex items-center' htmlFor={`input-${color}`}>
            <span className='text-gray-700 dark:text-white font-normal'>{color}</span>
          </label>
          <TextInput
            color={color as TextInputProps['color']}
            name='input'
            id={`input-${color}`}
            className='mr-2'
            type='text'
            placeholder={color}
          />
        </React.Fragment>
      ))}
    </div>
    <div className='pt-2'>
      <label className='flex items-center' htmlFor='input-date'>
        <span className='text-gray-700 dark:text-white font-normal'>date</span>
      </label>
      <TextInput color='primary' id='input-date' className='mr-2' type='date' />
      <label className='flex items-center' htmlFor='input-number'>
        <span className='text-gray-700 dark:text-white font-normal'>number</span>
      </label>
      <TextInput color='primary' id='input-number' className='mr-2' type='number' />
      <label className='flex items-center' htmlFor='input-disabled'>
        <span className='text-gray-700 dark:text-white font-normal'>disabled</span>
      </label>
      <TextInput
        color='primary'
        name='input'
        id='input-disabled'
        className='mr-2'
        type='text'
        disabled
        value='disabled'
      />
    </div>
  </Card>
);
