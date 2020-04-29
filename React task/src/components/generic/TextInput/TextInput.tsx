import React from 'react';
import styles from './TextInput.module.css';

export type TextInputProps = React.ComponentProps<'input'> & {
  label?: String;
  content?: string;
  name?: string;
  errorMessage?: string;
  isTouched?: boolean;
  value?: string;
};

function TextInput({
  label,
  content,
  name,
  errorMessage,
  isTouched,
  ...rest
}: TextInputProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {label && (
          <>
            <p>{label}</p>
          </>
        )}
        <input
          type="text"
          placeholder={content}
          name={name}
          className={styles.input}
          {...rest}
        />
        {isTouched && errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    </div>
  );
}

export default TextInput;
