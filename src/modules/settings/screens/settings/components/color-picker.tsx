import clsx from 'clsx';

export interface Option {
  value: string;
  text: string;
}

export interface ColorPickerProps {
  title: string;
  currentValue: string;
  setValue: (theme: string) => void;
  options: Option[];
}

export const ColorPicker = (props: ColorPickerProps): JSX.Element => {
  const {currentValue, setValue, title, options} = props;

  return (
    <div>
      <div className='text-lg font-bold mb-2'>{title}</div>
      <div className='-mr-4'>
        {options.map((option) => (
          <button
            key={option.value}
            className={clsx(
              `mr-4 mb-4 w-8 h-8 bg-${option.value}-600 dark:bg-${option.value}-400 rounded-full`,
              currentValue === option.value
                ? `ring-offset-4 ring-2 ring-${option.value}-600 dark:ring-${option.value}-400`
                : '',
            )}
            type='button'
            onClick={() => setValue(option.value)}
          >
            {' '}
          </button>
        ))}
      </div>
    </div>
  );
};
