import {useRouter} from 'next/router';
import {getI18nText} from '@core/helpers/get-i18n-text';
import SITE_I18N_TEXT from '@locales/site.json';
import type {Page} from '@core/interfaces';
import type {NextPageContext} from 'next';
import {ErrorTemplate} from './error-template';

interface ErrorProps {
  statusCode?: number;
}

export const Error: Page<ErrorProps> = (props: ErrorProps): JSX.Element => {
  const {statusCode} = props;
  const router = useRouter();
  return (
    <ErrorTemplate
      code='500'
      message={
        statusCode
          ? getI18nText(SITE_I18N_TEXT, 'ERROR_SERVER', router).replace('{{statusCode}}', statusCode?.toString())
          : getI18nText(SITE_I18N_TEXT, 'ERROR_CLIENT', router)
      }
    />
  );
};

Error.hideLayout = true;

Error.getInitialProps = ({res, err}: NextPageContext) => {
  let statusCode: number | undefined;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  }
  return {statusCode};
};
