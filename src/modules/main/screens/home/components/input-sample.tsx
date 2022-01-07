import {Input} from '@core/components/input';
import {Card} from '@core/components/card';

export const InputSample = (): JSX.Element => (
  <Card title='Input sample' className='mt-2'>
    <div className='form-control'>
      <Input className='m-1' defaultValue='default' />
      <Input className='m-1' defaultValue='primary' variant='primary' />
      <Input className='m-1' defaultValue='secondary' variant='secondary' />
      <Input className='m-1' defaultValue='accent' variant='accent' />
      <Input className='m-1' defaultValue='success' variant='success' />
      <Input className='m-1' defaultValue='warning' variant='warning' />
      <Input className='m-1' defaultValue='error' variant='error' />
      <Input className='m-1' defaultValue='info' variant='info' />
      <Input className='m-1' disabled defaultValue='disabled' />
    </div>
  </Card>
);
