import {useRouter} from 'next/router';
import TemplateIcon from '@heroicons/react/outline/TemplateIcon';
import TemplateIconSolid from '@heroicons/react/solid/TemplateIcon';
import CogIcon from '@heroicons/react/outline/CogIcon';
import CogIconSolid from '@heroicons/react/solid/CogIcon';
import type {MenuItem} from '@core/interfaces';
import {Nav} from './nav';

const MENU_ITEMS: MenuItem[] = [
  {
    key: 'TAB_WALLET',
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
    <div
      className={`font-roboto min-h-screen max-h-screen 
        transition-all duration-700 bg-gray-200 dark:bg-gray-700 dark:text-white flex`}
    >
      <Nav menuItems={menuItems} />
      <main className='mx-auto container p-1 flex-1 overflow-auto mb-14 md:mb-0'>{children}</main>
    </div>
  );
};
