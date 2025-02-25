import { ethers } from 'ethers'
import { getProvider } from './provider'
import config from '@/config/index'
import { useAppStore } from '@/stores/index'
import MedalAbi from '@/abi/Medal.json'

export const getContract = (abi: any, address: string, isLogin = true) => {
  const provider = getProvider()
  if (!provider) return
  const signer: any = provider.getSigner()

  // if (isLogin) {
  //   const accountStore: any = useAppStore()
  //   if (!accountStore.isLogin) return
  // }
  return new ethers.Contract(address, abi, signer)
}

export const getMedalContractInstance = (address: string = config.MEDAL) => {
  return getContract(MedalAbi, address, true)
}
