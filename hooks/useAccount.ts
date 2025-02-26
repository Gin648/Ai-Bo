import { connectWallet as ethersConnect, signData as ethersSign, hashMessage } from '@/utils/ethersUtils'

import { useAppStore } from '@/stores/index'
import { addressAuthLogin } from '@/api/login'
export const useAccount = () => {
  const accountStore = useAppStore()

  const getCurrentAccount = () => {
    return accountStore.account
  }
  // 链接
  const connectWallet = async () => {
    await ethersConnect()
  }
  const disConnectWallet = () => {
    accountStore.changeAccount('')
    accountStore.changeSign({
      signature: '',
      address: '',
      message: ''
    })
    accountStore.resetUsers('')
  }

  // 监听钱包
  const listenWallet = async () => {
    // 账号切换
    try {
      window.ethereum.on('accountsChanged', async () => {
        disConnectWallet()
        location.reload()
      })
      // 断开链接
      window.ethereum.on('disconnect', () => {
        disConnectWallet()
        location.reload()
      })
    } catch (error) {
      console.error(error)
    }
  }

  // 登陆
  const login = async () => {
    if (!accountStore.isSign) {
      try {
        const resp: any = await ethersConnect()
        if (!resp.success) {
          return
        }
      } catch (error) {
        console.log(error)
      } finally {
      }
      const message = `Welcomes_AIBO_${new Date().getTime().toString().slice(0, 10)}`
      const signRes = await ethersSign(message)
      if (!signRes.success) {
        accountStore.changeAccount('')
        // alert(signRes.result)
        return
      }
      const signnature = signRes.result

      const messageRes = await hashMessage(message)

      const messageHash = messageRes.result
      const params = {
        address: accountStore.account,
        message: messageHash,
        signature: signnature
      }
	  let res= await addressAuthLogin({...params,inviteCode:
	  localStorage.getItem('inviteCode') && 
	  localStorage.getItem('inviteCode')!= 'undefined'?localStorage.getItem('inviteCode'):''})
	  if(res.success){
		accountStore.changeSign(params)
		accountStore.changeUsers(params)
		accountStore.ChangeUserInfo(res.data.aiUser)
		localStorage.setItem('satoken',res.data.token)
	  }
    }
  }

  return {
    connectWallet,
    listenWallet,
    getCurrentAccount,
    disConnectWallet,
    login
  }
}
