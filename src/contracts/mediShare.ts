import { ethers } from 'ethers';
import { CONTRACTS } from './config';
import { MEDISHARE_ABI } from './abi';
import { MOCK_MODE, mockContracts } from './mock';

export async function shareHealthData(
  signer: ethers.Signer,
  bloodSugar: number,
  cholesterol: number,
  bmi: number
): Promise<string> {
  const address = await signer.getAddress();
  
  if (MOCK_MODE) {
    return await mockContracts.shareData(address);
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISHARE, MEDISHARE_ABI, signer);
  
  // Convert to encrypted values (FHE placeholders)
  const encryptedBloodSugar = Math.floor(bloodSugar);
  const encryptedCholesterol = Math.floor(cholesterol);
  const encryptedBMI = Math.floor(bmi * 10); // Store BMI as integer
  
  const tx = await contract.shareData(
    encryptedBloodSugar,
    encryptedCholesterol,
    encryptedBMI
  );
  await tx.wait();
  return tx.hash;
}

export async function isDataShared(provider: ethers.Provider, address: string): Promise<boolean> {
  if (MOCK_MODE) {
    return await mockContracts.isDataShared(address);
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISHARE, MEDISHARE_ABI, provider);
  return await contract.isDataShared(address);
}

export async function optOutFromSharing(signer: ethers.Signer): Promise<string> {
  const address = await signer.getAddress();
  
  if (MOCK_MODE) {
    return await mockContracts.optOut(address);
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISHARE, MEDISHARE_ABI, signer);
  const tx = await contract.optOut();
  await tx.wait();
  return tx.hash;
}
