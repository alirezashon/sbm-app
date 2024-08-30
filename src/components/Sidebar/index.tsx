'use client'
import { useState } from 'react'
import { data, Items } from './data'
import styles from './index.module.css'
import {
  Arrow,
  CloseNav,
  Dashboard,
  VisitWallet,
  Add,
  Withdraw,
  SendMoney,
  Swap,
} from '../IconGenerator'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const generateIcon = (index: number, parentOpen: boolean) => {
    const iconList = [
      <Dashboard color={parentOpen ? 'white' : isOpen ? 'gray' : '#50545F'} />,
      <VisitWallet
        color={parentOpen ? 'white' : isOpen ? 'gray' : '#50545F'}
      />,
      <Withdraw color={parentOpen ? 'white' : isOpen ? 'gray' : '#50545F'} />,
      <SendMoney color={parentOpen ? 'white' : isOpen ? 'gray' : '#50545F'} />,
      <Swap color={parentOpen ? 'white' : isOpen ? 'gray' : '#50545F'} />,
    ]
    return iconList[index]
  }

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={`${styles.topSection}`}>
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
            className={`${styles.menuItem} `}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div
              className={`${styles.itemHeader} ${
                openIndex === index ? styles.active : ''
              }`}
            >
              {generateIcon(index, openIndex === index)}
              {isOpen && (
                <Link
                  className={`${styles.link} ${
                    openIndex === index ? styles.active : ''
                  }`}
                  href={item.link}
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

            {item.subItems && openIndex === index && isOpen && (
              <ul className={styles.subMenu}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subMenuItem}>
                    <Link className={styles.link} href={subItem.link}>
                      {subItem.name}
                      {generateIcon(index, openIndex === index)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
