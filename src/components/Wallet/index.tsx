import React from 'react'
import styles from './index.module.css'
import DoughnutChart from './Chart'
import { Add, Swap, Wallet, Withdraw } from '../IconGenerator'
import { formatNumberWithCommas } from '@/lib'
const WalletOverview: React.FC = () => {
  const data = {
    visitWalletInventory: 20000000,
    healthPortalInventory: 20000000,
    WithdrawaBalance: 20000000,
    TotalInventory: 20000000,
  }
  return (
    <div className={styles.container}>
      <div className={styles.topWalletBox}>
        <div className={styles.VisitWallet}>
          <div className={styles.walletName}>
            <Wallet color='#98A2B3' />
            <p>کیف پول ویزیت</p>
          </div>
          <div className={`number-font ${styles.visitInventory}`}>
            {formatNumberWithCommas(data.visitWalletInventory)}
          </div>
        </div>
        <div className={styles.HealthPortalWallet}>
          <div className={styles.walletName}>
            <Wallet color='#7747C0' />
            <p>کیف پول درگاه سلامت</p>
          </div>
          <div className={`number-font ${styles.HealthPortalInventory}`}>
            {formatNumberWithCommas(data.healthPortalInventory)}
          </div>
        </div>
      </div>
      <div className={styles.mainWalletBox}>
        <div className={styles.balanceActions}>
          <div className={styles.walletHeader}>
            <Wallet color='#7747C0' />
            <h2>کیف پول درگاه سلامت</h2>
          </div>

          <div className={styles.balanceContainer}>
            <div className={styles.balanceRow}>
              <span> کل موجودی</span>
              <p className={`number-font`}>
                {formatNumberWithCommas(data.TotalInventory)}
              </p>
            </div>
            <div className={styles.balanceRow}>
              <span> موجودی قابل برداشت</span>
              <p className={`number-font`}>
                {formatNumberWithCommas(data.WithdrawaBalance)}
              </p>
            </div>
          </div>

          <div className={styles.actions}>
            <div className={`scaleOnHover ${styles.withdraw}`}>
              <Withdraw color='#ffffff' />
              برداشت
            </div>
            <div className={`scaleOnHover ${styles.convert}`}>
              <Swap color='#ffffff' />
              تبدیل
            </div>
            <div className={`scaleOnHover ${styles.increaseBalance}`}>
              <Add color='#ffffff' />
              افزایش موجودی
            </div>
          </div>
        </div>
        <div className={styles.chartContainer}>
          <DoughnutChart />
        </div>
      </div>
    </div>
  )
}

export default WalletOverview
