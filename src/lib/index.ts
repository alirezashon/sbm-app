export const formatNumberWithCommas = (number: number) => {
  const value = `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'ریال'
  return value
}
