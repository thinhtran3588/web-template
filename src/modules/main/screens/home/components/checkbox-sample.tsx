import {Card} from '@core/components/card';
import {Checkbox} from '@core/components/checkbox';

export const CheckboxSample = (): JSX.Element => (
  <Card title='Checkbox' className='mt-2'>
    <div className='form-control'>
      <Checkbox className='' title='default' defaultChecked id='checkbox-default' />
      <Checkbox className='checkbox-primary' title='primary' defaultChecked id='checkbox-primary' />
      <Checkbox className='checkbox-secondary' title='secondary' defaultChecked id='checkbox-secondary' />
      <Checkbox className='checkbox-accent' title='accent' defaultChecked id='checkbox-accent' />
      <Checkbox className='checkbox-primary' title='disabled' disabled id='checkbox-disabled' />
      <Checkbox
        className='checkbox-primary'
        title='disabled checked'
        disabled
        defaultChecked
        id='checkbox-disabled-checked'
      />
    </div>
  </Card>
);
