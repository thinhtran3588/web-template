import clsx from 'clsx';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Fragment, useState} from 'react';
import ChevronLeftIcon from '@heroicons/react/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/solid/ChevronRightIcon';
import {useSelector} from 'react-redux';
import type {RootState} from '@store';
import type {MenuItem} from '@core/interfaces';
import {getI18nText} from '@core/helpers/get-i18n-text';
import SITE_I18N_TEXT from '@locales/site.json';
import {Logo} from './logo';
import {Footer} from './footer';
import {TqtIcon} from './tqt-icon';

export interface NavProps {
  menuItems: MenuItem[];
}

export const Nav = (props: NavProps): JSX.Element => {
  const {menuItems} = props;
  const router = useRouter();
  const [expandMenu, setExpandVisible] = useState(true);
  const colors = useSelector((state: RootState) => state.settings.colors);

  const toggleExpandMenu = (): void => {
    setExpandVisible(!expandMenu);
  };

  return (
    <nav
      className={clsx(
        `fixed bottom-0 inset-x-0 flex shadow-xl transition-width duration-700 
        bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-900
        md:static md:flex-col md:border-t-0 `,
        expandMenu ? 'md:w-56' : 'md:w-12',
      )}
    >
      <div className='hidden md:flex shadow-xl font-semibold text-xl h-12 p-2 justify-between items-center'>
        <Link href='/'>
          <a
            className={clsx(
              'flex items-center overflow-hidden transition-opacity duration-700',
              expandMenu ? 'px-2 w-40 opacity-100' : 'px-0 w-0 opacity-0',
            )}
            role='link'
            aria-hidden='true'
          >
            <span>
              <Logo className='h-6' />
            </span>
            <span className='ml-2'>Template</span>
          </a>
        </Link>
        <button
          type='button'
          title='Expand'
          className='flex justify-center items-center p-1'
          onClick={toggleExpandMenu}
        >
          {expandMenu ? <ChevronLeftIcon className='w-6 h-6' /> : <ChevronRightIcon className='w-6 h-6' />}
        </button>
      </div>
      {menuItems.map((item, index) => (
        <Fragment key={item.href}>
          <Link href={item.href}>
            <a
              className={clsx(
                `flex flex-col font-semibold flex-1
                  hover:bg-gray-100 dark:hover:bg-gray-500 md:flex-initial`,
                item.current ? `text-${colors?.primary}-500 dark:text-${colors?.primary}-400` : ``,
              )}
              role='link'
              tabIndex={index}
              aria-hidden='true'
              title={getI18nText(SITE_I18N_TEXT, item.key, router)}
            >
              <span className='flex flex-col items-center md:flex-row px-0 py-2 md:pl-3'>
                <span>{item.current ? item.focusedIcon : item.icon}</span>
                <span
                  className={clsx(
                    'text-xs md:text-base whitespace-nowrap overflow-ellipsis transition-opacity duration-700',
                    expandMenu ? 'md:ml-2 md:w-40 opacity-100' : 'md:ml-0 md:w-0 opacity-0',
                  )}
                >
                  {getI18nText(SITE_I18N_TEXT, item.key, router)}
                </span>
              </span>
            </a>
          </Link>
        </Fragment>
      ))}
      <div className='hidden md:flex flex-1 items-end'>
        <div
          className={clsx(
            'hidden md:block font-semibold text-xl h-12',
            expandMenu ? 'w-0 opacity-100' : 'w-full opacity-100 p-2',
          )}
        >
          <Link href='/'>
            <a className='flex items-center flex-1' role='link' aria-hidden='true'>
              <TqtIcon className='w-10 h-10' />
            </a>
          </Link>
        </div>
        <div className={clsx('hidden md:block overflow-hidden', expandMenu ? 'w-full opacity-100' : 'w-0 opacity-0')}>
          <Footer />
        </div>
      </div>
    </nav>
  );
};
