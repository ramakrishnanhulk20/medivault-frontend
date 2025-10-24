export const CONTRACTS = {
  MEDISCORE: '0xec9e4d0d7d96E72DaC4C9d46d4597Cf8E81b4a22',
  MEDISHARE: '0xB702CED356e5D21a87D125F0cFdbf2Fc46bd72Ac',
  MEDIVAULT: '0x10cF8B08ED027EBcE94926B789b81172324DA101',
};

export const SEPOLIA_CHAIN_ID = '0xaa36a7'; // 11155111 in hex
export const SEPOLIA_RPC = 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY'; // You can use public RPC

export const NETWORK_CONFIG = {
  chainId: SEPOLIA_CHAIN_ID,
  chainName: 'Sepolia',
  rpcUrls: ['https://sepolia.infura.io/v3/'],
  blockExplorerUrls: ['https://sepolia.etherscan.io/'],
  nativeCurrency: {
    name: 'SepoliaETH',
    symbol: 'ETH',
    decimals: 18,
  },
};
