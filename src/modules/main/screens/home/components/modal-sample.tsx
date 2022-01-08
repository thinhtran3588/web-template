import {Button} from '@core/components/button';
import {ButtonGradient} from '@core/components/button-gradient';
import {Card} from '@core/components/card';
import {Modal} from '@core/components/modal';
import {useState} from 'react';

export const ModalSample = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <Card title='Modal Sample' className='mt-2'>
      <ButtonGradient onClick={() => setOpen(true)}>Open modal</ButtonGradient>
      <Modal
        open={open}
        setOpen={setOpen}
        title='Modal'
        buttons={[
          <ButtonGradient className='w-full sm:w-auto' onClick={() => setOpen(false)}>
            OK
          </ButtonGradient>,
          <Button className='w-full sm:w-auto' onClick={() => setOpen(false)}>
            Close
          </Button>,
        ]}
        variant='success'
      >
        <p>
          Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur
          repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.
        </p>
      </Modal>
    </Card>
  );
};
