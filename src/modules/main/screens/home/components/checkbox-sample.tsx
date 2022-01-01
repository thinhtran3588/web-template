import {Card} from '@core/components/card';
import {Checkbox, CheckboxProps} from '@core/components/checkbox';

export const CheckboxSample = (): JSX.Element => (
  <Card title='Checkbox' className='mt-2'>
    <div className='pt-2 flex'>
      {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
        <label className='flex items-center mr-2' htmlFor={`checkbox-${color}`}>
          <Checkbox color={color as CheckboxProps['color']} name='checkbox' id={`checkbox-${color}`} className='mr-2' />
          <span className='text-gray-700 dark:text-white font-normal'>{color}</span>
        </label>
      ))}
    </div>
    <div className='pt-2 flex'>
      {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
        <label className='flex items-center mr-2' htmlFor={`checkbox-${color}-checked`}>
          <Checkbox
            color={color as CheckboxProps['color']}
            defaultChecked
            name='checkbox-checked'
            id={`checkbox-${color}-checked`}
            className='mr-2'
          />
          <span className='text-gray-700 dark:text-white font-normal'>{color}</span>
        </label>
      ))}
    </div>
    <div className='pt-2 flex'>
      {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
        <label className='flex items-center mr-2' htmlFor={`checkbox-${color}-disabled`}>
          <Checkbox
            color={color as CheckboxProps['color']}
            disabled
            name='checkbox-disabled'
            id={`checkbox-${color}-disabled`}
            className='mr-2'
          />
          <span className='text-gray-700 dark:text-white font-normal'>{color}</span>
        </label>
      ))}
    </div>
    <div className='pt-2 flex'>
      {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
        <label className='flex items-center mr-2' htmlFor={`checkbox-${color}-disabled-checked`}>
          <Checkbox
            color={color as CheckboxProps['color']}
            disabled
            defaultChecked
            name='checkbox-disabled-checked'
            id={`checkbox-${color}-disabled-checked`}
            className='mr-2'
          />
          <span className='text-gray-700 dark:text-white font-normal'>{color}</span>
        </label>
      ))}
    </div>
  </Card>
);
