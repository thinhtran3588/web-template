/* eslint-disable react/jsx-props-no-spreading */
import React, {useEffect, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Modal, ModalProps} from '@app/core/components/modal';
import {Button} from '@app/core/components/button';
import {ButtonGradient} from '@app/core/components/button-gradient';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const ModalContainer = (props: ModalProps): JSX.Element => {
  const {open, ...other} = props;
  const [openModal, setOpenModal] = useState(open);

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  return (
    <div>
      <ButtonGradient onClick={() => setOpenModal(true)}>Open modal</ButtonGradient>
      <Modal
        {...other}
        open={openModal}
        setOpen={setOpenModal}
        title='Modal'
        buttons={[
          <Button outline className='w-full sm:w-auto' onClick={() => setOpenModal(false)}>
            Close
          </Button>,
          <ButtonGradient className='w-full sm:w-auto' onClick={() => setOpenModal(false)}>
            OK
          </ButtonGradient>,
        ]}
      />
    </div>
  );
};

const Template: ComponentStory<typeof Modal> = (args) => <ModalContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Modal',
  children: 'Modal content',
};
