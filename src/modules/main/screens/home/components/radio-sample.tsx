import {Card} from '@core/components/card';
import {Radio} from '@core/components/radio';

export const RadioSample = (): JSX.Element => (
  <Card title='Radio sample' className='mt-2'>
    <div className='form-control'>
      <Radio className='' title='default' id='radio-default' name='radio' defaultChecked />
      <Radio className='radio-primary' title='primary' id='radio-primary' name='radio' />
      <Radio className='radio-secondary' title='secondary' id='radio-secondary' name='radio' />
      <Radio className='radio-accent' title='accent' id='radio-accent' name='radio' />
      <Radio className='radio-primary' title='disabled' id='radio-disabled' name='radio' disabled />
    </div>
  </Card>
);
