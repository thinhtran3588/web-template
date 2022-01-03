import {Card} from '@core/components/card';
import {TextArea} from '@core/components/text-area';

export const TextAreaSample = (): JSX.Element => (
  <Card title='TextArea sample' className='mt-2'>
    <div className='form-control'>
      <TextArea className='m-1' title='default' id='textarea-default' defaultValue='default' />
      <TextArea className='textarea-primary m-1' title='primary' id='textarea-primary' defaultValue='primary' />
      <TextArea className='textarea-secondary m-1' title='secondary' id='textarea-secondary' defaultValue='secondary' />
      <TextArea className='textarea-accent m-1' title='accent' id='textarea-accent' defaultValue='accent' />
      <TextArea className='textarea-success m-1' title='accent' id='textarea-success' defaultValue='success' />
      <TextArea className='textarea-warning m-1' title='accent' id='textarea-warning' defaultValue='warning' />
      <TextArea className='textarea-error m-1' title='accent' id='textarea-error' defaultValue='error' />
      <TextArea className='textarea-info m-1' title='accent' id='textarea-info' defaultValue='info' />
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
