// Simplified ABIs - Only the functions we need

export const MEDISCORE_ABI = [
  // Initialize encrypted score
  {
    "inputs": [
      {"internalType": "bytes", "name": "encryptedScore", "type": "bytes"}
    ],
    "name": "initializeScore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Update score
  {
    "inputs": [
      {"internalType": "bytes", "name": "newEncryptedScore", "type": "bytes"}
    ],
    "name": "updateScore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Check if score meets threshold
  {
    "inputs": [
      {"internalType": "address", "name": "patient", "type": "address"},
      {"internalType": "uint256", "name": "threshold", "type": "uint256"}
    ],
    "name": "verifyThreshold",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  },
  // Check if user has score
  {
    "inputs": [
      {"internalType": "address", "name": "", "type": "address"}
    ],
    "name": "hasScore",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  }
];

export const MEDISHARE_ABI = [
  // Share encrypted health data
  {
    "inputs": [
      {"internalType": "bytes", "name": "encryptedBloodSugar", "type": "bytes"},
      {"internalType": "bytes", "name": "encryptedCholesterol", "type": "bytes"},
      {"internalType": "bytes", "name": "encryptedBMI", "type": "bytes"}
    ],
    "name": "shareData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Check if data is shared
  {
    "inputs": [
      {"internalType": "address", "name": "", "type": "address"}
    ],
    "name": "isDataShared",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  },
  // Opt out
  {
    "inputs": [],
    "name": "optOut",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const MEDIVAULT_ABI = [
  // Execute research query
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
