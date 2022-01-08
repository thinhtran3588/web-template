import {useFormik} from 'formik';
import * as Yup from 'yup';
import type {NextPage} from 'next';
import {Card} from '@core/components/card';
import {ButtonGradient} from '@core/components/button-gradient';
import {FieldText} from '@core/components/field-text';
import {FieldBoolean} from '@core/components/field-boolean';
import {Option} from '@core/interfaces';
import {FieldSelect} from '@core/components/field-select';
import {FieldTextArea} from '@core/components/field-textarea';
import {FieldRange} from '@core/components/field-range';
import {FieldDate} from '@core/components/field-date';

const options: Option[] = [
  {
    value: '1',
    text: 'Option 1',
  },
  {
    value: '2',
    text: 'Option 2',
  },
  {
    value: '3',
    text: 'Option 3',
  },
];

export const Form2: NextPage = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      text: '',
      number: 0,
      bool: false,
      select: '',
      textarea: '',
      range: 15,
      date: new Date(),
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      number: Yup.number()
        .integer()
        .min(2, 'Must be larger than or equal to 2')
        .max(15, 'Must be smaller than or equal to 15')
        .required('Required'),
      bool: Yup.boolean(),
      select: Yup.string().required('Required'),
      textarea: Yup.string()
        .min(2, 'Must be 5 characters or more')
        .max(15, 'Must be 25 characters or less')
        .required('Required'),
      range: Yup.number()
        .integer()
        .min(10, 'Must be larger than or equal to 10')
        .max(20, 'Must be smaller than or equal to 20')
        .required('Required'),
      date: Yup.date(),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, undefined, 2));
    },
  });

  return (
    <div className='container overflow-auto'>
      <Card title='Form' className='w-full'>
        <form onSubmit={formik.handleSubmit}>
          <div className='md:flex'>
            <div className='w-full md:w-1/2 m-1'>
              <FieldText formik={formik} name='text' id='text' label='Text Value' variant='primary' />
            </div>
            <div className='w-full md:w-1/2 m-1'>
              <FieldText
                formik={formik}
                name='number'
                id='number'
                label='Number Value'
                variant='primary'
                type='number'
              />
            </div>
          </div>
          <div className='md:flex'>
            <div className='w-full md:w-1/2 m-1'>
              <FieldBoolean formik={formik} name='bool' id='bool' label='Boolean Value' variant='primary' />
            </div>
            <div className='w-full md:w-1/2 m-1'>
              <FieldBoolean
                formik={formik}
                name='bool'
                id='bool'
                label='Boolean Value'
                variant='primary'
                type='checkbox'
              />
            </div>
          </div>
          <div className='md:flex'>
            <div className='w-full md:w-1/2 m-1'>
              <FieldBoolean
                formik={formik}
                name='bool'
                id='bool'
                label='Boolean Value'
                variant='primary'
                type='checkbox'
                showLabelInSameLine
              />
            </div>
            <div className='w-full md:w-1/2 m-1'>
              <FieldBoolean
                formik={formik}
                name='bool'
                id='bool'
                label='Boolean Value'
                variant='primary'
                showLabelInSameLine
              />
            </div>
          </div>
          <div className='md:flex'>
            <div className='w-full md:w-1/2 m-1'>
              <FieldBoolean
                formik={formik}
                name='bool'
                id='bool'
                label='Boolean Value'
                variant='primary'
                type='radio'
                falseLabel='False'
                trueLabel='True'
              />
            </div>
            <div className='w-full md:w-1/2 m-1'>
              <FieldSelect
                formik={formik}
                name='select'
                id='select'
                label='Select value - dropdown (select on mobile)'
                variant='primary'
                type='dropdown'
                options={options}
                placeholder='Choose'
                nativeSelectOnMobile
              />
            </div>
          </div>
          <div className='md:flex'>
            <div className='w-full md:w-1/2 m-1'>
              <FieldSelect
                formik={formik}
                name='select'
                id='select'
                label='Select value - dropdown'
                variant='primary'
                type='dropdown'
                options={options}
                placeholder='Choose'
              />
            </div>
            <div className='w-full md:w-1/2 m-1'>
              <FieldSelect
                formik={formik}
                name='select'
                id='select'
                label='Select value - select'
                variant='primary'
                type='select'
                options={options}
                placeholder='Choose'
              />
            </div>
          </div>
          <div className='md:flex'>
            <div className='w-full md:w-1/2 m-1'>
              <FieldSelect
                formik={formik}
                name='select'
                id='select'
                label='Select value - checkbox'
                variant='primary'
                type='checkbox'
                options={options}
              />
            </div>
            <div className='w-full md:w-1/2 m-1'>
              <FieldSelect
                formik={formik}
                name='select'
                id='select'
                label='Select value - checkbox'
                variant='primary'
                type='checkbox'
                options={options}
              />
            </div>
          </div>
          <div className='md:flex'>
            <div className='w-full md:w-1/2 m-1'>
              <FieldTextArea formik={formik} name='textarea' id='textarea' label='Textarea Value' variant='primary' />
            </div>
            <div className='w-full md:w-1/2 m-1'>
              <FieldRange
                formik={formik}
                name='range'
                id='range'
                label='Range Value'
                variant='primary'
                min={10}
                max={20}
              />
            </div>
          </div>
          <div className='md:flex'>
            <div className='w-full md:w-1/2 m-1'>
              <FieldDate formik={formik} name='date' id='date' label='Date Value' variant='primary' />
            </div>
          </div>

          <div className='mt-2 justify-center flex'>
            <ButtonGradient type='submit'>Submit</ButtonGradient>
          </div>
        </form>
      </Card>
    </div>
  );
};
