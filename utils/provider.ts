import { ethers } from 'ethers'

export class ProviderManager {
  private static instance: ProviderManager
  private provider: ethers.BrowserProvider | null = null

  // 定义一个私有构造函数
  // 私有构造函数意味着这个类不能被外部代码实例化
  // 只有在类内部才能调用这个构造函数
  private constructor() {}

  public static getInstance(): ProviderManager {
    if (!ProviderManager.instance) {
      ProviderManager.instance = new ProviderManager()
    }
    return ProviderManager.instance
  }

  public getProvider(): any {
    if (this.provider) {
      return this.provider
    }

    // 检查是否存在 window.ethereum
    if (typeof window !== 'undefined' && window.ethereum) {
      this.provider = new ethers.BrowserProvider(window.ethereum)
    }
    return this.provider
  }

  public clearProvider(): void {
    this.provider = null
  }
}

// 导出一个便捷方法
export const getProvider = (): ethers.BrowserProvider => {
  return ProviderManager.getInstance().getProvider()
}
