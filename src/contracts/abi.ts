export const MEDISCORE_ABI = [
  {
    "inputs": [
      {"internalType": "bytes", "name": "inputScore", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "storeHealthScore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "bytes", "name": "inputScore", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "updateScore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyScore",
    "outputs": [{"internalType": "euint64", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRiskLevel",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "user", "type": "address"}
    ],
    "name": "hasScore",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "threshold", "type": "uint256"}
    ],
    "name": "checkQualification",
    "outputs": [{"internalType": "ebool", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
];

export const MEDISHARE_ABI = [
  {
    "inputs": [
      {"internalType": "euint32", "name": "_bloodSugar", "type": "uint256"},
      {"internalType": "euint32", "name": "_cholesterol", "type": "uint256"},
      {"internalType": "euint32", "name": "_bmi", "type": "uint256"}
    ],
    "name": "shareData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "user", "type": "address"}
    ],
    "name": "isDataShared",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "optOut",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const MEDIVAULT_ABI = [
  {
    "inputs": [
      {"internalType": "uint256", "name": "ageMin", "type": "uint256"},
      {"internalType": "uint256", "name": "ageMax", "type": "uint256"},
      {"internalType": "uint256", "name": "bmiMin", "type": "uint256"},
      {"internalType": "uint256", "name": "bmiMax", "type": "uint256"}
    ],
    "name": "executeQuery",
    "outputs": [
      {"internalType": "uint256", "name": "patientCount", "type": "uint256"},
      {"internalType": "uint256", "name": "averageAge", "type": "uint256"}
    ],
    "stateMutability": "payable",
    "type": "function"
  }
];
