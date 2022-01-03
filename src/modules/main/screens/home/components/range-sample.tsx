import {Range} from '@core/components/range';
import {Card} from '@core/components/card';

export const RangeSample = (): JSX.Element => (
  <Card title='Range sample' className='mt-2'>
    <div className='form-control'>
      <Range className='m-1' defaultValue='default' />
      <Range className='range-primary m-1' defaultValue='primary' />
      <Range className='range-secondary m-1' defaultValue='secondary' />
      <Range className='range-accent m-1' defaultValue='accent' />
      <Range className='range-primary m-1' disabled defaultValue='disabled' />
    </div>
  </Card>
);
