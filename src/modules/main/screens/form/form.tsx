import type {NextPage} from 'next';
import {Card} from '@core/components/card';
import {Checkbox} from '@core/components/checkbox';
import {Radio} from '@core/components/radio';
import {ButtonGradient} from '@core/components/button-gradient';
import {Toggle} from '@core/components/toggle';
import {Input} from '@core/components/input';
import {Select} from '@core/components/select';
import {TextArea} from '@core/components/text-area';

export const Form: NextPage = (): JSX.Element => (
  <div className='container overflow-auto'>
    <Card title='Form' className='mb-2 w-full lg:w-1/2'>
      <div className='form-control'>
        <label className='label' htmlFor='input-primary'>
          <span>Text input</span>
        </label>
        <Input id='input-primary' type='text' placeholder='primary' className='input input-primary input-bordered' />
      </div>
      <div className='form-control'>
        <span className='label'>
          <span>Checkbox</span>
        </span>
        <Checkbox className='checkbox-primary' title='Option 1' defaultChecked id='checkbox-option-1' />
        <Checkbox className='checkbox-primary' title='Option 2' id='checkbox-option-2' />
        <Checkbox className='checkbox-primary' title='Option 3' id='checkbox-option-3' />
      </div>
      <div className='form-control'>
        <span className='label'>
          <span>Radio</span>
        </span>
        <Radio className='radio-primary' title='Option 1' defaultChecked id='radio-option-1' name='radio' />
        <Radio className='radio-primary' title='Option 2' id='radio-option-2' name='radio' />
        <Radio className='radio-primary' title='Option 3' id='radio-option-3' name='radio' />
      </div>
      <div className='form-control'>
        <label className='label' htmlFor='range'>
          <span>Range</span>
        </label>
        <Input id='range' type='range' min='20' max='100' className='range range-primary' />
      </div>
      <div className='form-control'>
        <label className='label' htmlFor='select'>
          <span>Select</span>
        </label>
        <Select id='select' className='select-primary'>
          <option disabled selected>
            Choose your superpower
          </option>
          <option>telekinesis</option>
          <option>time travel</option>
          <option>invisibility</option>
        </Select>
      </div>
      <div className='form-control'>
        <label className='label' htmlFor='textarea'>
          <span>Textarea</span>
        </label>
        <TextArea id='textarea' className='h-24 textarea-primary' placeholder='Bio' />
      </div>
      <div className='form-control mt-4'>
        <Toggle className='checkbox-primary' title='Toggle' defaultChecked id='toggle' />
      </div>
      <div className='mt-2 justify-center flex'>
        <ButtonGradient>Submit</ButtonGradient>
      </div>
    </Card>
  </div>
);
