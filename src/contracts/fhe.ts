import { initFhevm, createInstance, FhevmInstance } from 'fhevmjs';
import { ethers } from 'ethers';

let fhevmInstance: FhevmInstance | null = null;

export async function initializeFHE(provider: ethers.BrowserProvider): Promise<FhevmInstance> {
  if (fhevmInstance) return fhevmInstance;

  await initFhevm();
  
  const network = await provider.getNetwork();
  
  try {
    const publicKeyResponse = await provider.call({
      to: '0x0000000000000000000000000000000000000044',
      data: '0x',
    });
    
    const publicKeyBytes = ethers.getBytes(publicKeyResponse);

    fhevmInstance = await createInstance({
      chainId: Number(network.chainId),
      networkUrl: 'https://rpc.sepolia.org',
      gatewayUrl: 'https://gateway.sepolia.zama.ai',
      publicKey: publicKeyBytes,
    });

    return fhevmInstance;
  } catch (error) {
    console.error('FHE initialization failed:', error);
    throw error;
  }
}

export async function encryptUint8(value: number, provider: ethers.BrowserProvider) {
  const instance = await initializeFHE(provider);
  const encrypted = instance.encrypt8(value);
  return {
    data: encrypted.data,
    proof: encrypted.proof,
  };
}

export async function encryptUint32(value: number, provider: ethers.BrowserProvider) {
  const instance = await initializeFHE(provider);
  const encrypted = instance.encrypt32(value);
  return {
    data: encrypted.data,
    proof: encrypted.proof,
  };
}

export async function encryptUint64(value: number, provider: ethers.BrowserProvider) {
  const instance = await initializeFHE(provider);
  const encrypted = instance.encrypt64(value);
  return {
    data: encrypted.data,
    proof: encrypted.proof,
  };
}
