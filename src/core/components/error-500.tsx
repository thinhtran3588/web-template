import {useRouter} from 'next/router';
import {getI18nText} from '@core/helpers/get-i18n-text';
import SITE_I18N_TEXT from '@locales/site.json';
import type {Page} from '@core/interfaces';
import {ErrorTemplate} from './error-template';

export const Error500: Page = (): JSX.Element => {
  const router = useRouter();
  return <ErrorTemplate code='500' message={getI18nText(SITE_I18N_TEXT, 'ERROR_500_SERVER_SIDE_ERROR', router)} />;
};

Error500.hideLayout = true;
