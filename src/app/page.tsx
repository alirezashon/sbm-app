import Reports from '@/components/Report'
import WalletOverview from '../components/Wallet'
import styles from '../styles/page.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <WalletOverview />
      <Reports />
    </div>
  )
}

export default Home
