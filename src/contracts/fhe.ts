import { createInstance, type FhevmInstance } from '@zama-fhe/relayer-sdk';
import { ethers } from 'ethers';

let fhevmInstance: FhevmInstance | null = null;

export async function initializeFHE(provider: ethers.BrowserProvider): Promise<FhevmInstance> {
  if (fhevmInstance) return fhevmInstance;

  const network = await provider.getNetwork();
  const chainId = Number(network.chainId);

  try {
    fhevmInstance = await createInstance({
      chainId: chainId,
      networkUrl: 'https://rpc.sepolia.org',
      gatewayUrl: 'https://gateway.sepolia.zama.ai',
    });

    return fhevmInstance;
  } catch (error) {
    console.error('FHE initialization failed:', error);
    throw new Error('Failed to initialize FHE. Zama services may be unavailable.');
  }
}

export async function encryptUint64(value: number, provider: ethers.BrowserProvider) {
  try {
    const instance = await initializeFHE(provider);
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
    
    const { handles, inputProof } = await instance.createEncryptedInput(
      '0xec9e4d0d7d96E72DaC4C9d46d4597Cf8E81b4a22',
      userAddress
    ).add64(value).encrypt();
    
    return {
      data: handles[0],
      proof: inputProof,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt data. Please try again.');
  }
}

export async function encryptUint8(value: number, provider: ethers.BrowserProvider) {
  try {
    const instance = await initializeFHE(provider);
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
    
    const { handles, inputProof } = await instance.createEncryptedInput(
      '0xec9e4d0d7d96E72DaC4C9d46d4597Cf8E81b4a22',
      userAddress
    ).add8(value).encrypt();
    
    return {
      data: handles[0],
      proof: inputProof,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt data. Please try again.');
  }
}

export async function encryptUint32(value: number, provider: ethers.BrowserProvider) {
  try {
    const instance = await initializeFHE(provider);
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
    
    const { handles, inputProof } = await instance.createEncryptedInput(
      '0xB702CED356e5D21a87D125F0cFdbf2Fc46bd72Ac',
      userAddress
    ).add32(value).encrypt();
    
    return {
      data: handles[0],
      proof: inputProof,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt data. Please try again.');
  }
}
