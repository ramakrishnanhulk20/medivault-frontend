import { initFhevm, createInstance, type FhevmInstance } from 'fhevmjs';
import { ethers } from 'ethers';

let fhevmInstance: FhevmInstance | null = null;

const SEPOLIA_FHE_CONFIG = {
  chainId: 11155111,
  networkUrl: 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY', // Or use public RPC
  gatewayUrl: 'https://gateway.zama.ai', // Correct gateway
  kmsContractAddress: '0x05fD9B5EFE0a996095f5A5C7c4396A6dD7c1F124',
  aclContractAddress: '0xFee8407e2f5e3Ee68ad77cAE98c434e637f516e5',
};

export async function initializeFHE(): Promise<FhevmInstance> {
  if (fhevmInstance) return fhevmInstance;

  try {
    await initFhevm();
    fhevmInstance = await createInstance(SEPOLIA_FHE_CONFIG);
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
