export interface Items {
  name: string
  link: string
  icon: string
  subItems?: { name: string; link: string; icon: string }[]
}

export const data: Items[] = [
  {
    name: 'داشبورد',
    link: '/dashboard',
    icon: 'Dashboard',
  },
  {
    name: 'کیف پول',
    link: '/wallet',
    icon: 'Wallet',
    subItems: [
      { name: 'افزایش موجودی', link: '/wallet/add', icon: 'add_money.png' },
      { name: 'برداشت', link: '/wallet/withdraw', icon: 'withdraw.png' },
    ],
  },
  {
    name: 'گزارشات',
    link: '/reports',
    icon: 'reports.png',
    subItems: [
      { name: 'درآمد', link: '/reports/income', icon: 'income.png' },
      { name: 'هزینه‌ها', link: '/reports/expenses', icon: 'expenses.png' },
    ],
  },
  {
    name: 'تنظیمات',
    link: '/settings',
    icon: 'settings.png',
  },
]