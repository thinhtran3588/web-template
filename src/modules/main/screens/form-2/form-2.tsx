import type {NextPage} from 'next';
import {Card} from '@core/components/card';
import {Checkbox} from '@core/components/checkbox';
import {Radio} from '@core/components/radio';
import {ButtonGradient} from '@core/components/button-gradient';
import {Toggle} from '@core/components/toggle';

export const Form2: NextPage = (): JSX.Element => (
  <div className='container overflow-auto'>
    <Card title='Form'>
      <div className='flex flex-wrap'>
        <div className='form-control w-full lg:w-1/2 lg:px-1'>
          <label className='label' htmlFor='input-primary'>
            <span>Text input</span>
          </label>
          <input id='input-primary' type='text' placeholder='primary' className='input input-primary input-bordered' />
        </div>
        <div className='form-control w-full lg:w-1/2 lg:px-1'>
          <span className='label'>
            <span>Checkbox</span>
          </span>
          <Checkbox className='checkbox-primary' title='Option 1' defaultChecked id='checkbox-option-1' />
          <Checkbox className='checkbox-primary' title='Option 2' id='checkbox-option-2' />
          <Checkbox className='checkbox-primary' title='Option 3' id='checkbox-option-3' />
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='form-control w-full lg:w-1/2 lg:px-1'>
          <span className='label'>
            <span>Radio</span>
          </span>
          <Radio className='radio-primary' title='Option 1' defaultChecked id='radio-option-1' name='radio' />
          <Radio className='radio-primary' title='Option 2' id='radio-option-2' name='radio' />
          <Radio className='radio-primary' title='Option 3' id='radio-option-3' name='radio' />
        </div>
        <div className='form-control w-full lg:w-1/2 lg:px-1'>
          <label className='label' htmlFor='range'>
            <span>Range</span>
          </label>
          <input id='range' type='range' min='20' max='100' className='range range-primary' />
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='form-control w-full lg:w-1/2 lg:px-1'>
          <label className='label' htmlFor='select'>
            <span>Select</span>
          </label>
          <select id='select' className='select select-bordered select-primary'>
            <option disabled selected>
              Choose your superpower
            </option>
            <option>telekinesis</option>
            <option>time travel</option>
            <option>invisibility</option>
          </select>
        </div>
        <div className='form-control w-full lg:w-1/2 lg:px-1'>
          <label className='label' htmlFor='textarea'>
            <span>Textarea</span>
          </label>
          <textarea id='textarea' className='textarea h-24 textarea-bordered textarea-primary' placeholder='Bio' />
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='form-control w-full lg:w-1/2 lg:px-1 mt-4'>
          <Toggle className='checkbox-primary' title='Toggle' defaultChecked id='toggle' />
        </div>
      </div>
      <div className='mt-2 justify-center flex'>
        <ButtonGradient>Submit</ButtonGradient>
      </div>
    </Card>
  </div>
);
