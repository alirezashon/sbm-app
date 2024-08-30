'use client'
import { useState } from 'react'
import styles from './index.module.css'
import { data, headers } from './data'
import { Details, Receipt, Search, Upload } from '../IconGenerator'
import DatePicker from 'react-datepicker2'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import moment from 'moment-jalaali'
const Reports: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState({ value: moment() })
  return (
    <div className={styles.reportsSection}>
      <div className={styles.reportDetails}>
        <div className={styles.reportHeader}>
          <div className={styles.reportTitle}>
            <Receipt />
            <h2>گزارش‌های درگاه سلامت</h2>
          </div>
          <div className={styles.uploadIcon}>
            <Upload />
          </div>
        </div>
        <div className={styles.filters}>
          <div className={styles.radioGroup}>
            <label>
              <input type='radio' name='reportType' value='withdrawal' />
              گزارش‌های برداشت
            </label>
            <label>
              <input type='radio' name='reportType' value='deposit' />
              گزارش‌های واریز
            </label>
            <label>
              <input
                type='radio'
                name='reportType'
                value='all'
                defaultChecked
              />
              همه گزارش‌ها
            </label>
          </div>
          <div className={styles.searchInputs}>
            <div className={styles.searchInputsRow}>
              <label className={styles.filterLabel}>از تاریخ:</label>
              <DatePicker
                onChange={(value) => setSelectedDay({ value: value })}
                value={selectedDay.value}
                isGregorian={false}
                timePicker={false}
                className={styles.input}
              />
            </div>{' '}
            <div className={styles.searchInputsRow}>
              <label className={styles.filterLabel}>تا تاریخ:</label>
              <DatePicker
                onChange={(value) => setSelectedDay({ value: value })}
                value={selectedDay.value}
                isGregorian={false}
                timePicker={false}
                className={styles.input}
              />
            </div>
            <div className={styles.searchInputsRow}>
              <label className={styles.filterLabel}>از مبلغ:</label>
              <input
                type='number'
                placeholder='مبلغ'
                className={styles.input}
              />
            </div>
            <div className={styles.searchInputsRow}>
              <label className={styles.filterLabel}>تا مبلغ:</label>
              <input
                type='number'
                className={styles.input}
                placeholder='مبلغ'
              />
            </div>
          </div>
          <button className={styles.searchButton}>
            <Search />
            جستجو
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((report, index) => (
              <tr key={index}>
                <td>{report.rowNumber}</td>
                <td>{report.id}</td>
                <td>{report.wallet}</td>
                <td>{report.transactionType}</td>
                <td>{report.amount}</td>
                <td>{report.bankFee}</td>
                <td>{report.date}</td>
                <td>{report.description}</td>
                <td>
                  <p
                    className={
                      report.status === 'در انتظار بررسی'
                        ? styles.statusPending
                        : report.status === 'موفق'
                        ? styles.statusSuccess
                        : report.status === 'ناموفق'
                        ? styles.statusFailed
                        : report.status === 'لغو شده'
                        ? styles.statusCancelled
                        : styles.statusReturned
                    }
                  >
                    {report.status}
                  </p>
                </td>
                <td>
                  <Details color='#98A2B3' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <span className={styles.pageNumber}>1</span>
          <span className={styles.pageNumber}>2</span>
          <span className={styles.pageNumber}>3</span>
        </div>{' '}
      </div>
    </div>
  )
}

export default Reports
