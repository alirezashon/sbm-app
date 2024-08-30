export interface Items {
  name: string
  link: string
  subItems?: { name: string; link: string }[]
}
export const data: Items[] = [
  {
    name: 'داشبورد',
    link: '/dashboard',
  },
  {
    name: 'کیف پول',
    link: '/wallet',
    subItems: [{ name: 'کیف پول ویزیت', link: '/wallet/add' }],
  },
  {
    name: 'کیف پول درگاه سلامت',
    link: '/wallet/add',
    subItems: [
      { name: 'افزایش موجودی', link: '/wallet/add' },
      { name: 'تبدیل', link: '/wallet/swap' },
      { name: 'برداشت', link: '/wallet/withdraw' },
    ],
  },
  {
    name: 'پشتیبانی آنلاین',
    link: '/reports',
    subItems: [
      { name: 'پشتیبانی تلفنی', link: '/reports/income' },
      { name: '۰۲۱-۹۲۳۰۰۸۴۲', link: '/reports/expenses' },
      {
        name: 'پاسخگویی تلفنی ۸ صبح الی ۱۲ شب',
        link: '/reports/expenses',
      },
    ],
  },
]













// export interface Items {
//   name: string
//   link: string
//   subItems?: { name: string; link: string,subItems?: { name: string; link: string }[] }[]
// }

// export const data: Items[] = [
//   {
//     name: 'داشبورد',
//     link: '/dashboard',
//   },
//   {
//     name: 'کیف پول',
//     link: '/wallet',
//     subItems: [
//       { name: 'کیف پول ویزیت', link: '/wallet/add' },
//       {
//         name: 'کیف پول درگاه سلامت',
//         link: '/wallet/add',
//         subItems: [
//           { name: 'افزایش موجودی', link: '/wallet/add' },
//           { name: 'تبدیل', link: '/wallet/swap' },
//           { name: 'برداشت', link: '/wallet/withdraw' },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'پشتیبانی آنلاین',
//     link: '/reports',
//     subItems: [
//       { name: 'پشتیبانی تلفنی', link: '/reports/income' },
//       { name: '۰۲۱-۹۲۳۰۰۸۴۲', link: '/reports/expenses' },
//       {
//         name: 'پاسخگویی تلفنی ۸ صبح الی ۱۲ شب',
//         link: '/reports/expenses',
//       },
//     ],
//   },
// ]
