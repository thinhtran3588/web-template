import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import {Seo} from '@core/components/seo';
import {getI18nText} from '@core/helpers/get-i18n-text';
import SITE_I18N_TEXT from '@locales/site.json';

export const Home: NextPage = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full'>
      <Seo />
      <div>{getI18nText(SITE_I18N_TEXT, 'TAB_HOME', router)}</div>
    </div>
  );
};
