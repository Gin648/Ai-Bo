export const toLowerCase = (value: string): string => {
  return value ? value.toLowerCase() : ''
}
// 钱包地址格式化
export const formatAddress = (value: string, flag = '...', num = 3, laseNmu = 3) => {
  if (!value) return 0
  const startAddress = value.slice(0, num)
  const endAddress = value.slice(-laseNmu)
  const address = startAddress + flag + endAddress
  return address
}
