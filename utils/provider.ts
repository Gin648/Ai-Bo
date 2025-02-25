import { ethers } from 'ethers'

export class ProviderManager {
  private static instance: ProviderManager
  private provider: ethers.providers.JsonRpcProvider | null = null

  private constructor() {}

  public static getInstance(): ProviderManager {
    if (!ProviderManager.instance) {
      ProviderManager.instance = new ProviderManager()
    }
    return ProviderManager.instance
  }

  public getProvider(): ethers.providers.JsonRpcProvider {
    if (this.provider) {
      return this.provider
    }

    // 检查是否存在 window.ethereum
    if (typeof window !== 'undefined' && window.ethereum) {
      this.provider = new ethers.providers.Web3Provider(window.ethereum)
    }
    return this.provider
  }

  public clearProvider(): void {
    this.provider = null
  }
}

// 导出一个便捷方法
export const getProvider = (): ethers.providers.JsonRpcProvider => {
  return ProviderManager.getInstance().getProvider()
}
