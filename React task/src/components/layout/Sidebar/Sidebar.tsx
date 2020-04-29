import React from 'react';
import Button from 'components/generic/Button/Button';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Button>Salad</Button>
      <Button>Main course</Button>
      <Button>Desserts</Button>
      <Button>Beverages</Button>
      <Button>Extraordinary</Button>
      <Button>Exotic</Button>
    </div>
  );
}

export default Sidebar;
