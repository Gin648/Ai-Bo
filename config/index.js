export default {
  provider: 'https://bsc-dataseed1.ninicoin.io', // bsc provider
  // 币安链ID
  ethChainNumberId: 56,
  // 币安链配置
  chainConfig: {
    chainId: '0x38',
    chainName: 'BSC Main',
    rpcUrls: ['https://bsc-dataseed1.binance.org/'],
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    blockExplorerUrls: ['https://bscscan.com/']
  },
  USDT: '0x55d398326f99059fF775485246999027B3197955',
  MEDAL: '0xBFd7c843533F00aee0a0e26F95eB4359E7Ca1BBB'
}