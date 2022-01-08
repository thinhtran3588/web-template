import type {NextPage} from 'next';
import {ThemeSettingsContainer} from '@settings/screens/settings/components/theme-settings-container';
// eslint-disable-next-line max-len
import {ThemeColorPackSettingsContainer} from '@settings/screens/settings/components/theme-color-pack-settings-container';
import {Card} from '@core/components/card';
import {CardSample} from './components/card-sample';
import {ButtonSample} from './components/button-sample';
import {CheckboxSample} from './components/checkbox-sample';
import {RadioSample} from './components/radio-sample';
import {ToggleSample} from './components/toggle-sample';
import {InputSample} from './components/input-sample';
import {SelectSample} from './components/select-sample';
import {TextAreaSample} from './components/text-area-sample';
import {RangeSample} from './components/range-sample';
import {DatePickerSample} from './components/date-picker-sample';
import {DropdownSample} from './components/dropdown-sample';
import {ModalSample} from './components/modal-sample';

export const Home: NextPage = (): JSX.Element => (
  <div className='container overflow-auto'>
    <ThemeSettingsContainer />
    <ThemeColorPackSettingsContainer />
    <Card title='Components' className='mb-2'>
      <p>
        Since we&apos;re using{' '}
        <a className='link link-primary' href='https://tailwindcss.com/'>
          Tailwindcss
        </a>{' '}
        and{' '}
        <a className='link link-primary' href='https://daisyui.com/'>
          DaisyUI
        </a>
        , most components can be written directly with html tags and css classes except some customized ones. You can
        check them for full documentation and samples. Below are samples of customized components.
      </p>
      <p>
        For datepicker, use &nbsp;
        <a className='link link-primary' href='https://reactdatepicker.com/'>
          reactdatepicker
        </a>
        .
      </p>
    </Card>
    <CardSample />
    <ButtonSample />
    <CheckboxSample />
    <RadioSample />
    <ToggleSample />
    <InputSample />
    <DropdownSample />
    <SelectSample />
    <TextAreaSample />
    <RangeSample />
    <DatePickerSample />
    <ModalSample />
  </div>
);
