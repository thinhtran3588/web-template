import {Card} from '@core/components/card';
import {Radio, RadioProps} from '@core/components/radio';

export const RadioSample = (): JSX.Element => (
  <Card title='Radio' className='mt-2'>
    <div className='pt-2 flex'>
      {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
        <label className='flex items-center mr-2' htmlFor={`radio-${color}`}>
          <Radio
            color={color as RadioProps['color']}
            name='radio'
            id={`radio-${color}`}
            className='mr-2'
            radioGroup='radio'
          />
          <span className='text-gray-700 dark:text-white font-normal'>{color}</span>
        </label>
      ))}
    </div>
    <div className='pt-2 flex'>
      {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color, index) => (
        <label className='flex items-center mr-2' htmlFor={`radio-${color}-disabled`}>
          <Radio
            color={color as RadioProps['color']}
            disabled
            defaultChecked={index === 0}
            name='radio-disabled'
            id={`radio-${color}-disabled`}
            className='mr-2'
            radioGroup='radio-disabled'
          />
          <span className='text-gray-700 dark:text-white font-normal'>{color}</span>
        </label>
      ))}
    </div>
  </Card>
);
