import React, { ReactNode } from 'react';
import styles from './Main.module.css';

type Props = {
  children?: ReactNode;
};

function Main({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
