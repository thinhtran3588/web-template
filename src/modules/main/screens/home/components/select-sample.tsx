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
      <Select className='select-primary m-1' title='primary' id='select-primary' defaultValue=''>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='select-secondary m-1' title='secondary' id='select-secondary' defaultValue=''>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='select-accent m-1' title='accent' id='select-accent' defaultValue=''>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='select-success m-1' title='accent' id='select-success' defaultValue=''>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='select-warning m-1' title='accent' id='select-warning' defaultValue=''>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='select-error m-1' title='accent' id='select-error' defaultValue=''>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='select-info m-1' title='accent' id='select-info' defaultValue=''>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
      <Select className='select-primary m-1' title='disabled' id='select-disabled' disabled defaultValue=''>
        <option disabled>Choose your superpower</option>
        <option>telekinesis</option>
        <option value='2'>time travel</option>
        <option value='3'>invisibility</option>
      </Select>
    </div>
  </Card>
);
