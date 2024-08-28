import React from 'react';
import styles from './index.module.css';

const WalletOverview: React.FC = () => {
  return (
    <div className={styles.walletBox}>
      <div className={styles.walletHeader}>
        <h2>کیف پول درگاه سلامت</h2>
        <div className={styles.balanceContainer}>
          <span>20,000,000 ریال</span>
          <span>قابل برداشت</span>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartPlaceholder}>Chart Placeholder</div>
        <div className={styles.actions}>
          <button className={styles.increaseBalance}>افزایش موجودی</button>
          <button className={styles.convert}>تبدیل</button>
          <button className={styles.withdraw}>برداشت</button>
        </div>
      </div>
    </div>
  );
};

export default WalletOverview;
