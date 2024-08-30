'use client'
import { useRef } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ChartData, ChartOptions, Plugin } from 'chart.js'
import 'chart.js/auto'
import styles from './index.module.css'

const data: ChartData<'doughnut'> = {
  labels: ['برداشت شده', 'تبدیل شده', 'افزایش موجودی'],
  datasets: [
    {
      data: [100, 200, 700],
      backgroundColor: ['#0F973D', '#D42620', '#7747C0'],
      hoverBackgroundColor: ['#5eb97c', '#d75b57', '#a57ee0'],
      borderWidth: 0,
    },
  ],
}

const options: ChartOptions<'doughnut'> = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  cutout: '70%',
}

const customLabelsPlugin: Plugin<'doughnut'> = {
  id: 'customLabels',
  afterDatasetsDraw(chart: Chart<'doughnut'>) {
    const { ctx, data } = chart
    const meta = chart.getDatasetMeta(0)
    ctx.save()

    meta.data.forEach((element, index) => {
      const { x, y, startAngle, endAngle, innerRadius, outerRadius } =
        element as any
      const value = data.datasets[0].data[index]

      const angle = (startAngle + endAngle) / 2
      const radius = (outerRadius + innerRadius) / 2
      const positionX = x + radius * Math.cos(angle)*1.15
      const positionY = y + radius * Math.sin(angle)*1.15

      ctx.font = 'bold 12px IranSans'
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      ctx.beginPath()
      ctx.arc(positionX, positionY, 16, 0, 2 * Math.PI)
      ctx.fillStyle = 'white'
      ctx.fill()

      ctx.fillStyle = 'black'
      ctx.fillText(String(value), positionX, positionY)
    })

    ctx.restore()
  },
}

const DoughnutChart: React.FC = () => {
  const chartRef = useRef<Chart<'doughnut'> | null>(null)
  const total = data.datasets[0].data.reduce((acc, value) => acc + value, 0)

  const legendItems = data.labels?.map((label, index) => {
    const percentage = ((data.datasets[0].data[index] / total) * 100).toFixed()
    return (
      <div key={index} className={styles.legendBox}>
        <div
          className={styles.legendColor}
          style={{
            backgroundColor: Array.isArray(data.datasets[0].backgroundColor)
              ? data.datasets[0].backgroundColor[index]
              : undefined,
          }}
        ></div>
        <div className={`${styles.legendText} number-font`}>
          <p>{` ${label} `}</p>
          <p> % {percentage}  </p>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        <Doughnut
          data={data}
          options={options}
          plugins={[customLabelsPlugin]}
          ref={chartRef}
        />
      </div>
      <div className={styles.legendContainer}>
        {legendItems}
      </div>
    </div>
  )
}

export default DoughnutChart
