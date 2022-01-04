import {Card} from '@core/components/card';
import {Select} from '@core/components/select';

export const SelectSample = (): JSX.Element => (
  <Card title='Select sample' className='mt-2'>
    <div className='form-control'>
      <Select className='m-1' title='default' id='select-default' defaultValue=''>
        <option value='' disabled>
          Choose your superpower
        </option>
        <option value='1'>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='m-1' title='primary' id='select-primary' defaultValue='' variant='primary'>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='m-1' title='secondary' id='select-secondary' defaultValue='' variant='secondary'>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='m-1' title='accent' id='select-accent' defaultValue='' variant='accent'>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='m-1' title='accent' id='select-success' defaultValue='' variant='success'>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='m-1' title='accent' id='select-warning' defaultValue='' variant='warning'>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='m-1' title='accent' id='select-error' defaultValue='' variant='error'>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='m-1' title='accent' id='select-info' defaultValue='' variant='info'>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='m-1' title='disabled' id='select-disabled' disabled defaultValue='' variant='primary'>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
    </div>
  </Card>
);
