import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'

const BIG_TEN = new BigNumber(10)
/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000000
 */
export const getDecimalAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).times(BIG_TEN.pow(decimals))
}

//  bignumber to bignumber  15000000000000000000 -> 15
export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals))
}

/**
 * This function is not really necessary but is used throughout the site.
 */
export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  return getBalanceAmount(balance, decimals).toNumber()
}

export const getFullDisplayBalance = (balance: BigNumber, decimals = 18, displayDecimals?: number) => {
  return getBalanceAmount(balance, decimals).toFixed(displayDecimals as number)
}

// string
export const formatNumber = (number: number, minPrecision = 2, maxPrecision = 2): string => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision
  }
  return number.toLocaleString(undefined, options)
}

/**
 * Method to format the display of wei given an ethers.BigNumber object
 * Note: does NOT round
 */
export const formatBigNumber = (number: ethers.BigNumber = toWei(0), displayDecimals = 18, decimals = 18) => {
  const remainder = number.mod(ethers.BigNumber.from(10).pow(decimals - displayDecimals))
  const res = formatUnits(number.sub(remainder), decimals)
  return res === '0.0' ? '0' : res
}

/**
 * Method to format the display of wei given an ethers.BigNumber object with toFixed
 * Note: rounds
 */
export const formatBigNumberToFixed = (number: ethers.BigNumber, displayDecimals = 18, decimals = 18) => {
  const formattedString = formatUnits(number, decimals)
  return (+formattedString).toFixed(displayDecimals)
}

/**
 * Formats a FixedNumber like BigNumber
 * i.e. Formats 9763410526137450427.1196 into 9.763 (3 display decimals)
 */
export const formatFixedNumber = (number: ethers.FixedNumber, displayDecimals = 18, decimals = 18) => {
  // Remove decimal
  const [leftSide] = number.toString().split('.')
  return formatBigNumber(ethers.BigNumber.from(leftSide), displayDecimals, decimals)
}

/**
 * @description: 大数据处理使用ethers
 * @param {*} amount
 * @param {*} tokenDecimals
 * @return {*}
 */
export function toWei(amount: string | number, tokenDecimals = 18) {
  if (typeof amount === 'number') {
    amount = amount + ''
  }
  return ethers.utils.parseUnits(amount, tokenDecimals)
}

export function fromWei(amount: ethers.BigNumber): string {
  return ethers.utils.formatUnits(amount, 'ether')
}
