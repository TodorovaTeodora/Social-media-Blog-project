import React from 'react';
import { Field, FieldProps } from 'formik';
import TextInput from '../TextInput';
import { TextInputProps } from '../TextInput/TextInput';

type TextInputFieldProps = FieldProps & {
  label?: String;
  content?: string;
  name?: string;
  errorMessage?: string;
  isTouched?: boolean;
};

type State = {
  search: String;
};

function TextInputField({ field, form, ...rest }: TextInputFieldProps) {
  return (
    <TextInput
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      name={field.name}
      errorMessage={form.errors[field.name] as string}
      isTouched={!!form.touched[field.name]}
      {...rest}
    />
  );
}

export default (props: TextInputProps) => (
  <Field component={TextInputField} {...props} />
);
