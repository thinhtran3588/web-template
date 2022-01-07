/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import {Provider, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import type {AppProps} from 'next/app';
import {Layout} from '@core/components/layout';
import {RootState, store} from '@store';
import type {NextComponentType, NextPageContext} from 'next';
import {ErrorBoundary} from '@core/components/error-boundary';
import {Seo} from '@core/components/seo';

interface BaseAppProps {
  Component: NextComponentType<NextPageContext, any, {}> & {
    hideLayout?: boolean;
  };
  pageProps: any;
}

const BaseApp = ({Component, pageProps}: BaseAppProps): JSX.Element => {
  const locale = useSelector((state: RootState) => state.settings.locale);
  const theme = useSelector((state: RootState) => state.settings.theme);
  const themeColorPack = useSelector((state: RootState) => state.settings.themeColorPack);
  const router = useRouter();

  const renderComponent = (): JSX.Element =>
    Component.hideLayout ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );

  useEffect(() => {
    if (locale !== router.locale) {
      router.push(router.route, undefined, {locale});
    }
  }, [locale, router]);

  useEffect(() => {
    if (theme === 'dark' || (theme === '' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeColorPack);
  }, [themeColorPack]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Seo />
      <ErrorBoundary>{renderComponent()}</ErrorBoundary>
    </>
  );
};

export const App = ({Component, pageProps}: AppProps): JSX.Element => (
  <Provider store={store}>
    <BaseApp Component={Component} pageProps={pageProps} />
  </Provider>
);
