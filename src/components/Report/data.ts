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
    date: '۱۴۰۳/۰۵/۲۳',
    serviceFee: '2,000,000',
    bankFee: '2,000,000',
    amount: '2,000,000,000,000',
    transactionType: 'برداشت',
    wallet: 'درگاه سلامت',
    id: '۲۳۴۵۶۷',
    rowNumber: 1,
    description: 'توضیحات',
  },
  {
    status: 'ناموفق',
    date: '۱۴۰۳/۰۵/۲۳',
    serviceFee: '2,000,000',
    bankFee: '2,000,000',
    amount: '2,000,000,000,000',
    transactionType: 'برداشت',
    wallet: 'درگاه سلامت',
    id: '۲۳۴۵۶۷',
    rowNumber: 1,
    description: 'توضیحات',
  },
  {
    status: 'در انتظار بررسی',
    date: '۱۴۰۳/۰۵/۲۳',
    serviceFee: '2,000,000',
    bankFee: '2,000,000',
    amount: '2,000,000,000,000',
    transactionType: 'واریز',
    wallet: 'درگاه سلامت',
    id: '۲۳۴۵۶۷',
    rowNumber: 1,
    description: 'توضیحات',
  },
  {
    status: 'لغو شده',
    date: '۱۴۰۳/۰۵/۲۳',
    serviceFee: '2,000,000',
    bankFee: '2,000,000',
    amount: '2,000,000,000,000',
    transactionType: 'واریز',
    wallet: 'درگاه سلامت',
    id: '۲۳۴۵۶۷',
    rowNumber: 1,
    description: 'توضیحات',
  },
  {
    status: 'برگشتی',
    date: '۱۴۰۳/۰۵/۲۳',
    serviceFee: '2,000,000',
    bankFee: '2,000,000',
    amount: '2,000,000,000,000',
    transactionType: 'واریز',
    wallet: 'درگاه سلامت',
    id: '۲۳۴۵۶۷',
    rowNumber: 1,
    description: 'توضیحات',
  },
]
