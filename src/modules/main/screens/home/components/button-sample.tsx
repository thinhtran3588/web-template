import {Button} from '@core/components/button';
import {ButtonGradient} from '@core/components/button-gradient';
import {Card} from '@core/components/card';

export const ButtonSample = (): JSX.Element => (
  <Card title='Button sample' className='mt-2'>
    <ButtonGradient className='m-1'>gradient</ButtonGradient>
    <Button className='btn-primary m-1'>primary</Button>
    <Button className='btn-secondary m-1'>secondary</Button>
    <Button className='btn-accent m-1'>accent</Button>
    <Button className='m-1'>neutral</Button>
    <Button className='btn-ghost m-1'>ghost</Button>
    <Button className='btn-link m-1'>link</Button>
    <Button className='btn-success m-1'>success</Button>
    <Button className='btn-warning m-1'>warning</Button>
    <Button className='btn-error m-1'>error</Button>
    <Button className='btn-info m-1'>info</Button>
    <br />
    <Button className='btn-primary m-1' disabled>
      disabled
    </Button>
    <ButtonGradient className='btn-primary m-1' disabled>
      disabled
    </ButtonGradient>
    <br />
    <ButtonGradient className='btn-primary loading m-1'>loading</ButtonGradient>
    <Button className='btn-primary loading m-1'>loading</Button>
    <Button className='btn-primary loading m-1' disabled>
      loading disabled
    </Button>
    <ButtonGradient className='btn-primary loading m-1' disabled>
      loading disabled
    </ButtonGradient>
  </Card>
);
