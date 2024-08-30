interface Report {
  status: 'موفق' | 'ناموفق' | 'در انتظار بررسی' | 'لغو شده' | 'برگشتی'
  date: string
  serviceFee: string
  bankFee: string
  amount: string
  transactionType: 'برداشت' | 'واریز'
  wallet: string
  id: string
  rowNumber: number
  description: string
}
export const headers = [
  'ردیف',
  'شناسه',
  'کیف پول',
  'نوع تراکنش',
  'مبلغ (ریال)',
  'کارمزد بانکی (ریال)',
  'کارمزد خدمت (ریال)',
  'تاریخ',
  'وضعیت',
  'جزئیات',
]
export const data: Report[] = [
  {
    status: 'موفق',
    date: '1403/05/23',
    serviceFee: '2000000',
    bankFee: '2000000',
    amount: '2000000000000',
    transactionType: 'برداشت',
    wallet: 'درگاه سلامت',
    id: '234567',
    rowNumber: 1,
    description: 'توضیحات',
  },
  {
    status: 'ناموفق',
    date: '1403/05/23',
    serviceFee: '2000000',
    bankFee: '2000000',
    amount: '2000000000000',
    transactionType: 'برداشت',
    wallet: 'درگاه سلامت',
    id: '234567',
    rowNumber: 1,
    description: 'توضیحات',
  },
  {
    status: 'در انتظار بررسی',
    date: '1403/05/23',
    serviceFee: '2000000',
    bankFee: '2000000',
    amount: '2000000000000',
    transactionType: 'واریز',
    wallet: 'درگاه سلامت',
    id: '234567',
    rowNumber: 1,
    description: 'توضیحات',
  },
  {
    status: 'لغو شده',
    date: '1403/05/23',
    serviceFee: '2000000',
    bankFee: '2000000',
    amount: '2000000000000',
    transactionType: 'واریز',
    wallet: 'درگاه سلامت',
    id: '234567',
    rowNumber: 1,
    description: 'توضیحات',
  },
  {
    status: 'برگشتی',
    date: '1403/05/23',
    serviceFee: '2000000',
    bankFee: '2000000',
    amount: '2000000000000',
    transactionType: 'واریز',
    wallet: 'درگاه سلامت',
    id: '234567',
    rowNumber: 1,
    description: 'توضیحات',
  },
]
