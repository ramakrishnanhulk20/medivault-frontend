import { initFhevm, createInstance, type FhevmInstance } from 'fhevmjs';
import { ethers } from 'ethers';

let fhevmInstance: FhevmInstance | null = null;

const SEPOLIA_CONFIG = {
  chainId: 11155111,
  networkUrl: 'https://rpc.sepolia.org',
  gatewayUrl: 'https://gateway.sepolia.zama.ai',
  kmsContractAddress: '0x1364cBBf2cDF5032C47d8226a6f6FBD2AFCDacAC',
  aclContractAddress: '0x687820221192C5B662b25367F70076A37bc79b6c',
};

export async function initializeFHE(): Promise<FhevmInstance> {
  if (fhevmInstance) return fhevmInstance;

  try {
    await initFhevm();
    fhevmInstance = await createInstance(SEPOLIA_CONFIG);
    return fhevmInstance;
  } catch (error) {
    console.error('FHE initialization failed:', error);
    throw new Error('Failed to initialize FHE.');
  }
}

export async function encryptUint64(
  value: number,
  provider: ethers.BrowserProvider
) {
  try {
    const instance = await initializeFHE();
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
    
    const input = instance.createEncryptedInput(
      '0xec9e4d0d7d96E72DaC4C9d46d4597Cf8E81b4a22',
      userAddress
    );
    
    input.add64(value);
    const encrypted = await input.encrypt();
    
    return {
      data: encrypted.handles[0],
      proof: encrypted.inputProof,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt data.');
  }
}

export async function encryptUint32(
  value: number,
  provider: ethers.BrowserProvider
) {
  try {
    const instance = await initializeFHE();
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
    
    const input = instance.createEncryptedInput(
      '0xB702CED356e5D21a87D125F0cFdbf2Fc46bd72Ac',
      userAddress
    );
    
    input.add32(value);
    const encrypted = await input.encrypt();
    
    return {
      data: encrypted.handles[0],
      proof: encrypted.inputProof,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt data.');
  }
}
