import {Range} from '@core/components/range';
import {Card} from '@core/components/card';

export const RangeSample = (): JSX.Element => (
  <Card title='Range sample' className='mt-2'>
    <div className='form-control'>
      <Range className='m-1' defaultValue='default' />
      <Range className='m-1' defaultValue='primary' variant='primary' />
      <Range className='m-1' defaultValue='secondary' variant='secondary' />
      <Range className='m-1' defaultValue='accent' variant='accent' />
      <Range className='m-1' disabled defaultValue='disabled' />
    </div>
  </Card>
);
