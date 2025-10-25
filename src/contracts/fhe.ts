import { initFhevm, createInstance } from 'fhevmjs';
import { ethers } from 'ethers';

let fhevmInstance: any = null;

export async function initializeFHE(provider: ethers.BrowserProvider) {
  if (fhevmInstance) return fhevmInstance;

  // Initialize fhEVM
  await initFhevm();
  
  const network = await provider.getNetwork();
  const publicKey = await provider.call({
    to: '0x0000000000000000000000000000000000000044', // FHE public key contract
    data: '0x',
  });

  fhevmInstance = await createInstance({
    chainId: Number(network.chainId),
    networkUrl: 'https://rpc.sepolia.org',
    gatewayUrl: 'https://gateway.sepolia.zama.ai',
    publicKey: publicKey,
  });

  return fhevmInstance;
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
