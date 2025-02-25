import { ethers, toBeArray } from 'ethers'
import { getProvider } from './provider'
import config from '@/config/index'

// 统一错误返回
export const failResult = <T extends Error | string>(result: T): web3Result<T> => ({
  success: false,
  result
}) // 统一成功返回
export const successResult = <T>(result: T): web3Result<T> => ({
  success: true,
  result
})

import { useAppStore } from '@/stores/index'

export const connectWallet = async () => {
  const accountStore: any = useAppStore()
  try {
    //重新拿provider
    const provider = getProvider()
    await provider.send('eth_requestAccounts', [])
    //v6 需要加await
    const signer = await provider.getSigner()
    const fistAccount = await signer.getAddress()
    accountStore.changeAccount(fistAccount)

    // 這裡赋值sign
    if (
      accountStore?.users?.[fistAccount] &&
      accountStore?.users?.[fistAccount]?.address &&
      accountStore?.users?.[fistAccount]?.message &&
      accountStore?.users?.[fistAccount]?.signature
    ) {
      accountStore.changeSign(accountStore.users[fistAccount])
    }
    // network.chainId⇒ bigint
    const ethChainId = ethers.hexlify(toBeArray((await provider.getNetwork()).chainId))
    const ethChainNumberId = ethers.hexlify(toBeArray(config.ethChainNumberId))
    if (ethChainId !== ethChainNumberId) {
      window.ethereum
        .request({
          method: 'wallet_addEthereumChain',
          params: [config.chainConfig]
        })
        .then(() => {
          location.reload()
        })
    }
    return successResult(fistAccount)
  } catch (error: any) {
    console.log(error, 'error')

    // accountStore.changeAccount("");
    return failResult(error)
  }
}

/**
 * 签名数据
 * @account 需要签名的账户
 * @data 需要签名的数据
 * @privatekey 私钥
 * @return 签名后的数据
 */
export const signData = async (message: string) => {
  const provider = getProvider()
  const accountStore = useAppStore()
  if (!accountStore.account) await connectWallet()
  const signer = await provider.getSigner()
  try {
    const signature = await signer.signMessage(message)
    return successResult(signature)
  } catch (error: any) {
    return failResult(error)
  }
}

/**
 * 计算给定消息的哈希
 * @message 要进行哈希计算的消息
 * @return 哈希过的消息
 */
export const hashMessage = async (message: string) => {
  try {
    const resp = await ethers.hashMessage(message)
    return successResult(resp)
  } catch (err: any) {
    console.error(err)
    return failResult(err)
  }
}
