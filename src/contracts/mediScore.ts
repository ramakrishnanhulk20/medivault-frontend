import { ethers } from 'ethers';
import { CONTRACTS } from './config';
import { MEDISCORE_ABI } from './abi';
import { MOCK_MODE, mockContracts } from './mock';
import { encryptUint64 } from './fhe';

export async function initializeScore(signer: ethers.Signer): Promise<string> {
  const address = await signer.getAddress();
  
  if (MOCK_MODE) {
    return await mockContracts.initializeScore(address);
  }
  
  const provider = signer.provider as ethers.BrowserProvider;
  const contract = new ethers.Contract(CONTRACTS.MEDISCORE, MEDISCORE_ABI, signer);
  
  const scoreValue = 750;
  const encrypted = await encryptUint64(scoreValue, provider);
  
  const tx = await contract.storeHealthScore(encrypted.data, encrypted.proof);
  await tx.wait();
  return tx.hash;
}

export async function updateScore(signer: ethers.Signer): Promise<string> {
  const address = await signer.getAddress();
  
  if (MOCK_MODE) {
    return await mockContracts.updateScore(address);
  }
  
  const provider = signer.provider as ethers.BrowserProvider;
  const contract = new ethers.Contract(CONTRACTS.MEDISCORE, MEDISCORE_ABI, signer);
  
  const newScore = 780;
  const encrypted = await encryptUint64(newScore, provider);
  
  const tx = await contract.updateScore(encrypted.data, encrypted.proof);
  await tx.wait();
  return tx.hash;
}

export async function hasScore(provider: ethers.Provider, address: string): Promise<boolean> {
  if (MOCK_MODE) {
    return await mockContracts.hasScore(address);
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISCORE, MEDISCORE_ABI, provider);
  return await contract.hasScore(address);
}

export async function verifyThreshold(
  provider: ethers.Provider,
  _patientAddress: string,
  threshold: number
): Promise<boolean> {
  if (MOCK_MODE) {
    return await mockContracts.verifyThreshold();
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISCORE, MEDISCORE_ABI, provider);
  const result = await contract.checkQualification(threshold);
  
  return result !== null && result !== undefined;
}
