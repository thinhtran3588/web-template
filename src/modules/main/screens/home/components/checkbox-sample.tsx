import {Card} from '@core/components/card';
import {Checkbox} from '@core/components/checkbox';

export const CheckboxSample = (): JSX.Element => (
  <Card title='Checkbox' className='mt-2'>
    <div className='form-control'>
      <Checkbox title='default' defaultChecked id='checkbox-default' />
      <Checkbox title='primary' defaultChecked id='checkbox-primary' variant='primary' />
      <Checkbox title='secondary' defaultChecked id='checkbox-secondary' variant='secondary' />
      <Checkbox title='accent' defaultChecked id='checkbox-accent' variant='accent' />
      <Checkbox title='disabled' disabled id='checkbox-disabled' variant='primary' />
      <Checkbox title='disabled checked' disabled defaultChecked id='checkbox-disabled-checked' />
    </div>
  </Card>
);
