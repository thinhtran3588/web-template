import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import {Seo} from '@core/components/seo';
import SITE_I18N_TEXT from '@locales/site.json';
import {getI18nText} from '@core/helpers/get-i18n-text';
import {LocaleSettingsContainer} from './components/locale-settings-container';
import {ThemeSettingsContainer} from './components/theme-settings-container';
import {ThemeColorPackSettingsContainer} from './components/theme-color-pack-settings-container';

export const Settings: NextPage = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className='container overflow-auto'>
      <Seo title={getI18nText(SITE_I18N_TEXT, 'TAB_SETTINGS', router)} />
      <LocaleSettingsContainer />
      <ThemeSettingsContainer />
      <ThemeColorPackSettingsContainer />
    </div>
  );
};
