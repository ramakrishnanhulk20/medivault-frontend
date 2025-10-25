import { ethers } from 'ethers';
import { CONTRACTS } from './config';
import { MEDISHARE_ABI } from './abi';
import { MOCK_MODE, mockContracts } from './mock';
import { encryptUint32 } from './fhe';

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
  
  const provider = signer.provider as ethers.BrowserProvider;
  const contract = new ethers.Contract(CONTRACTS.MEDISHARE, MEDISHARE_ABI, signer);
  
  // Encrypt all three values
  const encryptedBloodSugar = await encryptUint32(Math.floor(bloodSugar), provider);
  const encryptedCholesterol = await encryptUint32(Math.floor(cholesterol), provider);
  const encryptedBMI = await encryptUint32(Math.floor(bmi * 10), provider);
  
  const tx = await contract.shareHealthData(
    encryptedBloodSugar.data,
    encryptedBloodSugar.proof,
    encryptedCholesterol.data,
    encryptedCholesterol.proof,
    encryptedBMI.data,
    encryptedBMI.proof
  );
  await tx.wait();
  return tx.hash;
}

export async function isDataShared(provider: ethers.Provider, address: string): Promise<boolean> {
  if (MOCK_MODE) {
    return await mockContracts.isDataShared(address);
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISHARE, MEDISHARE_ABI, provider);
  return await contract.isPatientSharing(address);
}

export async function optOutFromSharing(signer: ethers.Signer): Promise<string> {
  const address = await signer.getAddress();
  
  if (MOCK_MODE) {
    return await mockContracts.optOut(address);
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDISHARE, MEDISHARE_ABI, signer);
  const tx = await contract.optInToSharing(false);
  await tx.wait();
  return tx.hash;
}
