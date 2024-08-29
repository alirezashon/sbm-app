import React from 'react'
import styles from './index.module.css'
import DoughnutChart from './Chart'

const WalletOverview: React.FC = () => {
  return (
    <div className={styles.walletBox}>
      <div className={styles.walletHeader}>
        <h2>کیف پول درگاه سلامت</h2>
        <div className={styles.balanceContainer}>
          <span className={`number-font`}>20,000,000 ریال</span>
          <span>قابل برداشت</span>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.actions}>
          <div className={styles.increaseBalance}>افزایش موجودی</div>
          <div className={styles.convert}>تبدیل</div>
          <div className={styles.withdraw}>برداشت</div>
        </div>
        <DoughnutChart />
      </div>
    </div>
  )
}

export default WalletOverview
