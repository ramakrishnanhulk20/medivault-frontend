import { createInstance, SepoliaConfig, type FhevmInstance } from '@zama-fhe/relayer-sdk';

let fhevmInstance: FhevmInstance | null = null;

export async function initializeFHE(): Promise<FhevmInstance> {
  if (fhevmInstance) return fhevmInstance;

  try {
    fhevmInstance = await createInstance(SepoliaConfig);
    return fhevmInstance;
  } catch (error) {
    console.error('FHE initialization failed:', error);
    throw new Error('Failed to initialize FHE. Zama Relayer may be unavailable.');
  }
}

export async function encryptUint64(
  value: number,
  contractAddress: string,
  userAddress: string
) {
  try {
    const instance = await initializeFHE();
    
    const input = instance.createEncryptedInput(contractAddress, userAddress);
    input.add64(value);
    
    const encryptedData = await input.encrypt();
    
    return {
      data: encryptedData.handles[0],
      proof: encryptedData.inputProof,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt data. Please try again.');
  }
}

export async function encryptUint32(
  value: number,
  contractAddress: string,
  userAddress: string
) {
  try {
    const instance = await initializeFHE();
    
    const input = instance.createEncryptedInput(contractAddress, userAddress);
    input.add32(value);
    
    const encryptedData = await input.encrypt();
    
    return {
      data: encryptedData.handles[0],
      proof: encryptedData.inputProof,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt data. Please try again.');
  }
}
