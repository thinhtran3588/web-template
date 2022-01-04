import {Card} from '@core/components/card';
import {TextArea} from '@core/components/text-area';

export const TextAreaSample = (): JSX.Element => (
  <Card title='TextArea sample' className='mt-2'>
    <div className='form-control'>
      <TextArea className='m-1' title='default' id='textarea-default' defaultValue='default' />
      <TextArea className='m-1' title='primary' id='textarea-primary' defaultValue='primary' variant='primary' />
      <TextArea
        className='m-1'
        title='secondary'
        id='textarea-secondary'
        defaultValue='secondary'
        variant='secondary'
      />
      <TextArea className='m-1' title='accent' id='textarea-accent' defaultValue='accent' variant='primary' />
      <TextArea className='m-1' title='success' id='textarea-success' defaultValue='success' variant='success' />
      <TextArea className='m-1' title='warning' id='textarea-warning' defaultValue='warning' variant='warning' />
      <TextArea className='m-1' title='error' id='textarea-error' defaultValue='error' variant='error' />
      <TextArea className='m-1' title='info' id='textarea-info' defaultValue='info' variant='info' />
      <TextArea
        className='textarea-primary m-1'
        title='disabled'
        id='textarea-disabled'
        disabled
        defaultValue='disabled'
      />
    </div>
  </Card>
);
