import { type ContractRunner, ethers } from 'ethers'

import config from '@/config/index'
import { useAppStore } from '@/stores/index'
import MedalAbi from '@/abi/Medal.json'

let provider: any
provider = window.ethereum ? new ethers.BrowserProvider(window.ethereum) : null

export const signer: ContractRunner = await provider.getSigner()

export const getContract = (abi: any, address: string, isLogin = true) => {
  const signerOrProvider = new ethers.Contract(address, abi, signer)
  return signerOrProvider
}

export const getMedalContractInstance = (address: string = config.MEDAL) => {
  console.log(address, 'address')

  return getContract(MedalAbi, address, true)
}
