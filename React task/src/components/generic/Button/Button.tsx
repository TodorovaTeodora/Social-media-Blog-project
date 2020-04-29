import React from 'react';
import styles from './Button.module.css';

type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return (
    <button type="button" className={styles.Button}>
      {children}
    </button>
  );
}

export default Button;
