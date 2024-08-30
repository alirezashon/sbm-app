'use client'
import { useState } from 'react'
import { data } from './data'
import styles from './index.module.css'
import {
  Arrow,
  CloseNav,
  Dashboard,
  VisitWallet,
  Add,
  SendMoney,
  Swap,
  MainWallet,
  OnlineChat,
  Call,
  SignOut,
} from '../IconGenerator'
import Link from 'next/link'
import Image from 'next/image'
const user = {
  name: 'محدثه عالمی',
  src: '/images/2.png',
}
const Sidebar: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const iconList = [
    Dashboard,
    MainWallet,
    VisitWallet,
    Add,
    SendMoney,
    Swap,
    OnlineChat,
    Call,
  ]

  const generateIcon = (iconIndex: number | undefined, color: string) => {
    if (
      iconIndex === undefined ||
      iconIndex < 0 ||
      iconIndex >= iconList.length
    ) {
      return null
    }

    const IconComponent = iconList[iconIndex]
    return <IconComponent color={color} />
  }

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={`${styles.topSection} ${styles.bottomBorder}`}>
        {isOpen && (
          <Image
            src={'/icons/logo.svg'}
            alt='logo'
            width={200}
            height={100}
            className={styles.logo}
          />
        )}
        <div className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseNav /> : <Dashboard color='gray' />}
        </div>
      </div>

      <ul className={styles.menu}>
        <p>منو اصلی</p>
        {data.map((item, index) => (
          <li
            key={index}
            className={`${styles.menuItem} ${
              openIndex === index && styles.bottomBorder
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {isOpen && index === 4 ? (
              <p>دسترسی سریع</p>
            ) : (
              isOpen && index === 5 && <p>پشتیبانی تلفنی</p>
            )}
            <div
              className={`${styles.itemHeader} ${
                openIndex === index ? styles.active : ''
              }`}
            >
              {generateIcon(
                item.iconIndex,
                openIndex === index ? 'white' : isOpen ? 'gray' : '#50545F'
              )}
              {isOpen && (
                <Link
                  className={`${styles.link} ${
                    openIndex === index ? styles.active : ''
                  }`}
                  href={item.link}
                  target='_blank'
                >
                  {item.name}
                </Link>
              )}
              {item.subItems && isOpen && (
                <div
                  style={{
                    transform: `rotate(${
                      openIndex === index ? '180' : '0'
                    }deg)`,
                    display: 'flex',
                  }}
                >
                  <Arrow color={openIndex === index ? 'white' : '#50545F'} />
                </div>
              )}
            </div>
            {/* SUB ITEMS */}
            {item.subItems && openIndex === index && isOpen && (
              <ul className={styles.subMenu}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subMenuItem}>
                    <Link
                      className={styles.link}
                      href={subItem.link}
                      target='_blank'
                    >
                      <div className={`${styles.subItems}`}>
                        {generateIcon(subItem.iconIndex, '#50545F')}
                        {subItem.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <div className={styles.user}>
          <div className={styles.username}>
            <Image
              src={user.src}
              className={styles.userImage}
              alt={'پروفایل کاربر'}
              width={100}
              height={100}
              id='img'
            />
            <div
              className={styles.status}
            >
            </div>
            {user.name}
          </div>
          <SignOut />
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
