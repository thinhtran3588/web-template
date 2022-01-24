/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {useFormik} from 'formik';
import {Input} from './input';
import {Toggle} from './toggle';
import {Checkbox} from './checkbox';
import {Radio} from './radio';

export type FieldBooleanProps = Omit<React.ComponentProps<typeof Input>, 'type'> & {
  label: string;
  name: string;
  showLabel?: boolean;
  showError?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
  formik: unknown;
  type?: 'toggle' | 'checkbox' | 'radio';
  id?: string;
  disabled?: boolean;
  showLabelInSameLine?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  /** false label for radio */
  falseLabel?: string;
  /** true label for radio */
  trueLabel?: string;
};

export const FieldBoolean = (props: FieldBooleanProps): JSX.Element => {
  const {
    formik: inputFormik,
    label,
    name,
    containerClassName,
    labelClassName,
    showError = true,
    showLabel = true,
    variant,
    type = 'toggle',
    showLabelInSameLine,
    id,
    disabled,
    falseLabel,
    trueLabel,
  } = props;
  const formik = inputFormik as ReturnType<typeof useFormik>;

  const renderToggleControl = (): JSX.Element => (
    <Toggle
      id={id}
      checked={Boolean(formik.values[name])}
      onChange={(e) => formik.setFieldValue(name, e.target.checked)}
      title={showLabelInSameLine ? label : ''}
      disabled={disabled}
      variant={variant}
      name={name}
    />
  );

  const renderCheckboxControl = (): JSX.Element => (
    <Checkbox
      id={id}
      checked={Boolean(formik.values[name])}
      onChange={(e) => formik.setFieldValue(name, e.target.checked)}
      title={showLabelInSameLine ? label : ''}
      disabled={disabled}
      variant={variant}
      name={name}
    />
  );

  const renderRadioControl = (): JSX.Element => (
    <>
      <Radio
        id={id}
        checked={Boolean(!formik.values[name])}
        onChange={() => formik.setFieldValue(name, false)}
        title={falseLabel || 'False'}
        disabled={disabled}
        variant={variant}
        name={name}
      />
      <Radio
        id={id}
        checked={Boolean(formik.values[name])}
        onChange={() => formik.setFieldValue(name, false)}
        title={trueLabel || 'True'}
        disabled={disabled}
        variant={variant}
        name={name}
      />
    </>
  );

  return (
    <div className={clsx('form-control pt-1', containerClassName)}>
      {showLabel && (type === 'radio' || !showLabelInSameLine) && (
        <label className={clsx('label py-1', labelClassName)} htmlFor={id}>
          {label}
        </label>
      )}
      {type === 'toggle' && renderToggleControl()}
      {type === 'checkbox' && renderCheckboxControl()}
      {type === 'radio' && renderRadioControl()}
      {showError && formik.touched[name] && formik.errors[name] && (
        <span className='text-error mt-1'>{formik.errors[name]}</span>
      )}
    </div>
  );
};
