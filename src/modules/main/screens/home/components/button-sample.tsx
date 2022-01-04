import {Button} from '@core/components/button';
import {ButtonGradient} from '@core/components/button-gradient';
import {Card} from '@core/components/card';

export const ButtonSample = (): JSX.Element => (
  <Card title='Button sample' className='mt-2'>
    <ButtonGradient className='m-1'>gradient</ButtonGradient>
    <ButtonGradient variantFrom='secondary' variantTo='accent' className='m-1'>
      gradient
    </ButtonGradient>
    <Button variant='primary' className='m-1'>
      primary
    </Button>
    <Button variant='secondary' className='m-1'>
      secondary
    </Button>
    <Button variant='accent' className='m-1'>
      accent
    </Button>
    <Button className='m-1'>neutral</Button>
    <Button variant='ghost' className='m-1'>
      ghost
    </Button>
    <Button variant='link' className='m-1'>
      link
    </Button>
    <Button variant='success' className='m-1'>
      success
    </Button>
    <Button variant='warning' className='m-1'>
      warning
    </Button>
    <Button variant='error' className='m-1'>
      error
    </Button>
    <Button variant='info' className='m-1'>
      info
    </Button>
    <br />
    <Button variant='primary' className='m-1' disabled>
      disabled
    </Button>
    <ButtonGradient className='m-1' disabled>
      disabled
    </ButtonGradient>
    <br />
    <ButtonGradient className='loading m-1'>loading</ButtonGradient>
    <Button className='loading m-1'>loading</Button>
    <Button className='loading m-1' disabled>
      loading disabled
    </Button>
    <ButtonGradient className='loading m-1' disabled>
      loading disabled
    </ButtonGradient>
  </Card>
);
