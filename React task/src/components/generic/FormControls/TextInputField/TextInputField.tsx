import React, { Component } from 'react';
import { FieldProps, Field } from 'formik';
import TextInput from '../TextInput';
import { TextInputProps } from '../TextInput/TextInput';

type Props = FieldProps & TextInputProps;

class TextInputField extends Component<Props> {
  render() {
    const { field, form, ...rest } = this.props;

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
}

export default (props: TextInputProps) => (
  <Field component={TextInputField} {...props} />
);
