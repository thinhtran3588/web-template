import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import {Dispatch, RootState} from '@store';
import themes from '@core/themes.json';
import {getI18nText} from '@core/helpers/get-i18n-text';
import SETTINGS_I18N_TEXT from '@locales/settings.json';
import {Card} from '@core/components/card';
import {NoSsr} from '@core/components/no-ssr';

const THEMES = themes;

export const ThemeColorPackSettingsContainer = (): JSX.Element => {
  const themeColorPack = useSelector((state: RootState) => state.settings.themeColorPack);
  const {
    settings: {setThemeColorPack},
  } = useDispatch<Dispatch>();
  const router = useRouter();

  return (
    <Card title={getI18nText(SETTINGS_I18N_TEXT, 'COLORS', router)} className='mb-2'>
      <NoSsr>
        <div className='flex flex-wrap '>
          {THEMES.map((colorPack) => (
            <button
              className={clsx(
                ' bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 px-1 py-2 m-1 rounded-xl flex',
                themeColorPack === colorPack.name ? 'ring-2 ring-primary ring-offset-2 ring-offset-gray-800' : '',
              )}
              onClick={() => setThemeColorPack(colorPack.name)}
              type='button'
              key={colorPack.name}
            >
              {[colorPack.primary, colorPack.secondary, colorPack.accent].map((color) => (
                <span key={color} className='inline-block w-6 h-6 bg-black mx-1' style={{backgroundColor: color}} />
              ))}
            </button>
          ))}
        </div>
      </NoSsr>
    </Card>
  );
};
