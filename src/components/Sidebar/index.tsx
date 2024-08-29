'use client'
import React, { useState } from 'react'
import { data } from './data'
import styles from './index.module.css'
import Image from 'next/image'
import { Arrow, Dashboard } from '../IconGenerator'
import Link from 'next/link'
const Sidebar: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <div className='' style={{ width: '18vw' }}>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
        style={{ width: '15vw' }}
      >
        <div className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={`/icons/${isOpen ? 'close.png' : 'open.png'}`}
            alt='toggle'
            width={20}
            height={20}
          />
        </div>

        <ul className={styles.menu}>
          {data.map((item, index) => (
            <li
              key={index}
              className={`${styles.menuItem} ${
                openIndex === index ? styles.active : ''
              }`}
            >
              <div
                className={styles.itemHeader}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <Dashboard color='yellow' />
                <Image
                  src={`/icons/${item.icon}`}
                  alt={item.name}
                  width={20}
                  height={20}
                />
                {isOpen && (
                  <Link className={styles.link} href={item.link}>
                    {item.name}
                  </Link>
                )}
                {item.subItems && isOpen && (
                  // openIndex === index ? 'up_arrow.png' : 'down_arrow.png'
                  <Arrow color='red' dir='190' />
                )}
              </div>

              {item.subItems && openIndex === index && isOpen && (
                <ul className={styles.subMenu}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.subMenuItem}>
                      <Image
                        src={`/icons/${subItem.icon}`}
                        alt={subItem.name}
                        width={15}
                        height={15}
                      />
                      <Link className={styles.link} href={subItem.link}>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
