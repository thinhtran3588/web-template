import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import {Dispatch, RootState} from '@store';
import CONSTANTS from '@core/constants.json';
import {getI18nText} from '@core/helpers/get-i18n-text';
import SETTINGS_I18N_TEXT from '@locales/settings.json';
import {Color} from '@core/interfaces';
import {Card} from '@core/components/card';
import {ColorPicker} from './color-picker';

const {COLORS} = CONSTANTS;
const OPTIONS = COLORS.map((color) => ({value: color, text: color}));

export const ColorsSettingsContainer = (): JSX.Element => {
  const colors = useSelector((state: RootState) => state.settings.colors);
  const {
    settings: {setColor},
  } = useDispatch<Dispatch>();
  const router = useRouter();

  const setColorForType = (type: Color) => (value: string) => setColor({type, value});

  return (
    <Card title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS', router)} className='mb-2'>
      <ColorPicker
        key='primary'
        title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS_PRIMARY', router)}
        currentValue={colors?.primary}
        options={OPTIONS}
        setValue={setColorForType('primary')}
      />
      <ColorPicker
        key='secondary'
        title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS_SECONDARY', router)}
        currentValue={colors?.secondary}
        options={OPTIONS}
        setValue={setColorForType('secondary')}
      />
      <ColorPicker
        key='success'
        title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS_SUCCESS', router)}
        currentValue={colors?.success}
        options={OPTIONS}
        setValue={setColorForType('success')}
      />
      <ColorPicker
        key='warning'
        title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS_WARNING', router)}
        currentValue={colors?.warning}
        options={OPTIONS}
        setValue={setColorForType('warning')}
      />
      <ColorPicker
        key='error'
        title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS_ERROR', router)}
        currentValue={colors?.error}
        options={OPTIONS}
        setValue={setColorForType('error')}
      />
      <ColorPicker
        key='info'
        title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS_INFO', router)}
        currentValue={colors?.info}
        options={OPTIONS}
        setValue={setColorForType('info')}
      />
      <ColorPicker
        key='default'
        title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS_DEFAULT', router)}
        currentValue={colors?.default}
        options={OPTIONS}
        setValue={setColorForType('default')}
      />
    </Card>
  );
};
