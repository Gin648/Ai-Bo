// export default {
//   provider: 'https://bsc-dataseed1.ninicoin.io', // bsc provider
//   // 币安链ID
//   ethChainNumberId: 56,
//   // 币安链配置
//   chainConfig: {
//     chainId: '0x38',
//     chainName: 'BSC Main',
//     rpcUrls: ['https://bsc-dataseed1.binance.org/'],
//     nativeCurrency: {
//       name: 'BNB',
//       symbol: 'BNB',
//       decimals: 18
//     },
//     blockExplorerUrls: ['https://bscscan.com/']
//   },
//   USDT: '0x55d398326f99059fF775485246999027B3197955',
//   MEDAL: '0xBFd7c843533F00aee0a0e26F95eB4359E7Ca1BBB'
// }

export default {
  env: 'development',
  // baseUrl: 'https://flashmall-test.bljcoco.com/api',
  // baseUrl: 'https://qpyuznchmj.execute-api.ap-southeast-1.amazonaws.com',
  provider: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545', // bsc provider
  // 币安测试链ID
  ethChainNumberId: 97,
  // 币安链配置
  chainConfig: {
    chainId: '0x61',
    chainName: 'BNB Smart Chain Testnet',
    rpcUrls: ['https://data-seed-prebsc-1-s2.bnbchain.org:8545'],
    nativeCurrency: {
      name: 'tBNB',
      symbol: 'tBNB',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.bscscan.com'],
  },
  USDT: '0x5699fB9757d5401122294f8B956D608862890c1a',
  MEDAL: '0xBFd7c843533F00aee0a0e26F95eB4359E7Ca1BBB'
}
