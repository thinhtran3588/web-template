import {useRouter} from 'next/router';
import type {MenuItem} from '@core/interfaces';
import {Footer} from './footer';
import {Header} from './header';
import {ScrollToTopButton} from './scroll-to-top-button';

const MENU_ITEMS: MenuItem[] = [
  {
    key: 'TAB_HOME',
    href: '/',
    current: false,
    icon: '',
  },
  {
    key: 'TAB_SETTINGS',
    href: '/settings',
    current: false,
    icon: '',
  },
];

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps): JSX.Element => {
  const {children} = props;
  const router = useRouter();
  const menuItems: MenuItem[] = MENU_ITEMS.map((item) => ({...item, current: router.route === item.href}));

  return (
    <div className='font-roboto flex flex-col min-h-screen bg-gray-200 dark:bg-gray-700 dark:text-white'>
      <Header menuItems={menuItems} />
      <main className='flex flex-1 container mx-auto p-2'>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
