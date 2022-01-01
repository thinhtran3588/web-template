import type {NextPage} from 'next';
import {CardSample} from './components/card-sample';
import {ButtonSample} from './components/button-sample';
import {CheckboxSample} from './components/checkbox-sample';
import {RadioSample} from './components/radio-sample';
import {InputSample} from './components/input-sample';

export const Home: NextPage = (): JSX.Element => (
  <div className='container overflow-auto'>
    <h1 className='text-2xl font-bold'>Components</h1>
    <CardSample />
    <ButtonSample />
    <CheckboxSample />
    <RadioSample />
    <InputSample />
  </div>
);
