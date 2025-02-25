import { ethers } from 'ethers'
import { getMedalContractInstance } from '@/utils/contractHelper'
import { formatBigNumber, toWei } from '@/utils/formatBalance'

const medalContract = () => {
  // 获取 Medal 合约的实例，类型为 any，表示可以是任意类型
  const ContractInstance: any = getMedalContractInstance()
  const fixedGasPrice = ethers.parseUnits('1', 'gwei') // 设置为 1 Gwei
  const overrides = {
    gasPrice: fixedGasPrice
  }
  const USDT = async () => {
    try {
      const resp = await ContractInstance.USDT()
      return Number(formatBigNumber(resp))
    } catch (error) {
      return 0
    }
  }
  return {
    USDT
  }
}

export default medalContract
