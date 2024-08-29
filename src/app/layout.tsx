import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styles from '../styles/layout.module.css'

export const metadata: Metadata = {
  title: 'SBM-24',
  description: 'SBM user panel',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='fa'>
      <body>
        <Header />
        <main className={styles.mainContent}>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
