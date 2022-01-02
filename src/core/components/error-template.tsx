/* eslint-disable @next/next/no-img-element */
import {getI18nText} from '@core/helpers/get-i18n-text';
import SITE_I18N_TEXT from '@locales/site.json';
import {useRouter} from 'next/router';
import {Button} from './button';

interface ErrorTemplateProps {
  code?: string;
  message?: string;
}

export const ErrorTemplate = (props: ErrorTemplateProps): JSX.Element => {
  const {code, message} = props;
  const router = useRouter();

  const backToHomepage = (): void => {
    router.push('/');
  };

  return (
    <div className='relative overflow-hidden h-screen flex'>
      <img src='/error-background.svg' className='absolute h-full w-full object-cover' alt='bg' />
      <div className='container mx-auto px-6 md:px-12 relative z-10 flex flex-1 items-center justify-center'>
        <div className='w-full font-mono flex flex-col items-center relative z-10 md:-mt-96'>
          <h1 className='font-extrabold text-5xl text-center text-white leading-tight mt-4'>
            {message || getI18nText(SITE_I18N_TEXT, 'ERROR_SOMETHING_WENT_WRONG', router)}
          </h1>
          <p className='font-extrabold text-8xl text-white animate-bounce mt-10'>{code}</p>
          <Button className='mt-10 btn-primary' onClick={backToHomepage}>
            {getI18nText(SITE_I18N_TEXT, 'BACK_TO_HOMEPAGE', router)}
          </Button>
        </div>
      </div>
    </div>
  );
};
