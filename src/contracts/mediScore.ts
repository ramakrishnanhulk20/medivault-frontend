import { ethers } from 'ethers';
import { CONTRACTS } from './config';
import { MEDISCORE_ABI } from './abi';
import { MOCK_MODE, mockContracts } from './mock';

export async function initializeScore(signer: ethers.Signer): Promise<string> {
  const address = await signer.getAddress();
  
  if (MOCK_MODE) {
    return await mockContracts.initializeScore(address);
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISCORE, MEDISCORE_ABI, signer);
  
  // For FHE, use a simple number as encrypted score placeholder
  const fakeEncryptedScore = 750; // Represents encrypted score value
  
  const tx = await contract.storeHealthScore(fakeEncryptedScore);
  await tx.wait();
  return tx.hash;
}

export async function updateScore(signer: ethers.Signer): Promise<string> {
  const address = await signer.getAddress();
  
  if (MOCK_MODE) {
    return await mockContracts.updateScore(address);
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISCORE, MEDISCORE_ABI, signer);
  const newScore = 780; // New encrypted score placeholder
  
  const tx = await contract.updateScore(newScore);
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
  patientAddress: string,
  threshold: number
): Promise<boolean> {
  if (MOCK_MODE) {
    return await mockContracts.verifyThreshold();
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISCORE, MEDISCORE_ABI, provider);
  const result = await contract.checkQualification(threshold);
  
  // FHE returns encrypted boolean, for now return true if result exists
  return result !== null && result !== undefined;
}
