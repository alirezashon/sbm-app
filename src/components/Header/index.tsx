import { Chats, Notifications, Profile } from '../IconGenerator'
import styles from './index.module.css'

const Header: React.FC = () => {
  const user = 'دکتر محدثه عالمی'
  return (
    <div className={styles.container}>
      <h3>کیف پول</h3>
      <div className={styles.userBox}>
        <Notifications color='#50545F' isOnline={true} />
        <Chats color='#50545F' />
        <div className={styles.username}>{user}</div>
        <Profile color='#50545F' />
      </div>
    </div>
  )
}

export default Header
