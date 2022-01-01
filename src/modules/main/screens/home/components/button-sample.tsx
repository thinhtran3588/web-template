import {Card} from '@core/components/card';
import {Button, ButtonProps} from '@core/components/button';

export const ButtonSample = (): JSX.Element => (
  <Card title='Button' className='mt-2'>
    {['contained', 'outline'].map((variant) => (
      <div className='pt-2 flex' key={variant}>
        {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
          <Button
            className='mr-2'
            variant={variant as ButtonProps['variant']}
            color={color as ButtonProps['color']}
            key={color}
          >
            {color}
          </Button>
        ))}
      </div>
    ))}
    <div>
      {['contained', 'outline'].map((variant) => (
        <div className='pt-2 flex' key={variant}>
          {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
            <Button
              className='mr-2'
              variant={variant as ButtonProps['variant']}
              color={color as ButtonProps['color']}
              key={color}
              disabled
            >
              {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
    <div>
      {['contained', 'outline'].map((variant) => (
        <div className='flex flex-wrap' key={variant}>
          {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'].map((color) => (
            <Button
              className='mr-2 mt-2'
              variant={variant as ButtonProps['variant']}
              color={color as ButtonProps['color']}
              key={color}
              loading
            >
              {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
  </Card>
);
