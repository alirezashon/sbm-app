import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './index.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
