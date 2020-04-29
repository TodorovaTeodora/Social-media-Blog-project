import React from 'react';
import Sidebar from 'components/layout/Sidebar';
import Main from '../Main/Main';
import styles from './SiteMainContent.module.css';

function SiteMainContent() {
  return (
    <div className={styles.SiteMainContent}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default SiteMainContent;
