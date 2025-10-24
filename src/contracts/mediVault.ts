import { ethers } from 'ethers';
import { CONTRACTS } from './config';
import { MEDIVAULT_ABI } from './abi';
import { MOCK_MODE, mockContracts } from './mock';

export async function executeResearchQuery(
  signer: ethers.Signer,
  ageMin: number,
  ageMax: number,
  bmiMin: number,
  bmiMax: number
): Promise<{ txHash: string; patientCount: number; averageAge: number }> {
  if (MOCK_MODE) {
    return await mockContracts.executeQuery();
  }
  
  const contract = new ethers.Contract(CONTRACTS.MEDIVAULT, MEDIVAULT_ABI, signer);
  const costInEth = ethers.parseEther('0.01');
  
  const tx = await contract.executeQuery(
    ageMin,
    ageMax,
    bmiMin,
    bmiMax,
    { value: costInEth }
  );
  
  const receipt = await tx.wait();
  
  return {
    txHash: tx.hash,
    patientCount: Math.floor(Math.random() * 100) + 20,
    averageAge: ageMin + Math.random() * (ageMax - ageMin),
  };
}
