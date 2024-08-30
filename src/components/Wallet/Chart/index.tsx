'use client'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import styles from './index.module.css'
const data = {
  labels: ['برداشت شده', 'تبدیل شده', 'افزایش موجودی'],
  datasets: [
    {
      data: [10, 20, 70],
      backgroundColor: ['#0F973D','#D42620','#7747C0',  ],
      hoverBackgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
      borderWidth: 0,
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
}

const DoughnutChart: React.FC = () => {
  const total = data.datasets[0].data.reduce((acc, value) => acc + value, 0)
  const legendItems = data.labels.map((label, index) => {
    const percentage = ((data.datasets[0].data[index] / total) * 100).toFixed()
    return (
      <div key={index} className={styles.legendBox}>
        <div
          className={styles.legendColor}
          style={{
            backgroundColor: data.datasets[0].backgroundColor[index],
          }}
        ></div>
        <div className={`${styles.legendText} number-font`}>
          <p>{label}</p>
          <p> % {percentage}</p>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        <Doughnut data={data} options={options} />
      </div>
      <div>{legendItems}</div>
    </div>
  )
}

export default DoughnutChart
