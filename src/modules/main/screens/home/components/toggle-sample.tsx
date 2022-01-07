import {Card} from '@core/components/card';
import {Toggle} from '@core/components/toggle';

export const ToggleSample = (): JSX.Element => (
  <Card title='Toggle' className='mt-2'>
    <div className='form-control'>
      <Toggle className='' title='default' defaultChecked id='toggle-default' />
      <Toggle className='toggle-primary' title='primary' defaultChecked id='toggle-primary' />
      <Toggle className='toggle-secondary' title='secondary' defaultChecked id='toggle-secondary' />
      <Toggle className='toggle-accent' title='accent' defaultChecked id='toggle-accent' />
      <Toggle className='toggle-primary' title='disabled' disabled id='toggle-disabled' />
      <Toggle
        className='toggle-primary'
        title='disabled checked'
        disabled
        defaultChecked
        id='toggle-disabled-checked'
      />
    </div>
  </Card>
);
