import {ColorVariant} from '@core/interfaces';
import clsx from 'clsx';

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
  backgroundClassName?: string;
  title?: string;
  variant?: ColorVariant;
  buttons?: JSX.Element[];
}

export const Modal = (props: ModalProps): JSX.Element => {
  const {open, setOpen, children, backgroundClassName, buttons, variant = 'primary', title} = props;
  return (
    <div className={clsx('modal backdrop-blur bg-opacity-30', open ? 'modal-open' : '', backgroundClassName)}>
      <div className='absolute h-full w-full' onClick={() => setOpen(false)} aria-hidden />
      <div className='modal-box rounded-xl bg-white dark:bg-gray-800 p-2'>
        <div className={clsx(`font-semibold rounded-t-xl -mt-2 -mx-2 mb-1 p-2 bg-${variant} text-${variant}-content`)}>
          {title}
        </div>
        {children}
        <div className='mt-2 flex flex-col sm:flex-row sm:justify-end'>
          {buttons && buttons.map((button) => <span className='p-1'>{button}</span>)}
        </div>
      </div>
    </div>
  );
};

/**
 * css classes required by Tailwindcss
 * bg-primary bg-secondary bg-accent
 * bg-success bg-warning bg-error bg-info
 */
