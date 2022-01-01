import {useRouter} from 'next/router';
import TemplateIcon from '@heroicons/react/outline/TemplateIcon';
import TemplateIconSolid from '@heroicons/react/solid/TemplateIcon';
import CogIcon from '@heroicons/react/outline/CogIcon';
import CogIconSolid from '@heroicons/react/solid/CogIcon';
import type {MenuItem} from '@core/interfaces';
import {Nav} from './nav';
import {Seo} from './seo';

const MENU_ITEMS: MenuItem[] = [
  {
    key: 'TAB_HOME',
    href: '/',
    current: false,
    icon: <TemplateIcon className='w-6 h-6' />,
    focusedIcon: <TemplateIconSolid className='w-6 h-6' />,
  },
  {
    key: 'TAB_SETTINGS',
    href: '/settings',
    current: false,
    icon: <CogIcon className='w-6 h-6' />,
    focusedIcon: <CogIconSolid className='w-6 h-6' />,
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
    <div className='font-roboto min-h-screen max-h-screen bg-gray-200 dark:bg-gray-900 dark:text-gray-300 flex'>
      <Seo />
      <Nav menuItems={menuItems} />
      <main className='p-2 pb-14 md:pb-2 flex-1 flex'>{children}</main>
    </div>
  );
};
