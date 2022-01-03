import {Input} from '@core/components/input';
import {Card} from '@core/components/card';

export const InputSample = (): JSX.Element => (
  <Card title='Input sample' className='mt-2'>
    <div className='form-control'>
      <Input className='m-1' defaultValue='default' />
      <Input className='input-primary m-1' defaultValue='primary' />
      <Input className='input-secondary m-1' defaultValue='secondary' />
      <Input className='input-accent m-1' defaultValue='accent' />
      <Input className='input-success m-1' defaultValue='success' />
      <Input className='input-warning m-1' defaultValue='warning' />
      <Input className='input-error m-1' defaultValue='error' />
      <Input className='input-info m-1' defaultValue='info' />
      <Input className='input-primary m-1' disabled defaultValue='disabled' />
    </div>
  </Card>
);
