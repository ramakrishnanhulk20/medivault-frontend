// Mock blockchain calls for demo/testing
export const MOCK_MODE = true; // Set to false when real contracts are ready

export async function mockDelay(ms: number = 2000): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function generateMockTxHash(): string {
  const random = Math.random().toString(36).substring(2, 15);
  return `0x${random}${'0'.repeat(64 - random.length)}`;
}

// Mock storage
const mockStorage = {
  hasScore: new Set<string>(),
  sharedData: new Set<string>(),
};

export const mockContracts = {
  async initializeScore(address: string): Promise<string> {
    await mockDelay();
    mockStorage.hasScore.add(address.toLowerCase());
    return generateMockTxHash();
  },

  async updateScore(address: string): Promise<string> {
    await mockDelay();
    return generateMockTxHash();
  },

  async hasScore(address: string): Promise<boolean> {
    await mockDelay(500);
    return mockStorage.hasScore.has(address.toLowerCase());
  },

  async shareData(address: string): Promise<string> {
    await mockDelay();
    mockStorage.sharedData.add(address.toLowerCase());
    return generateMockTxHash();
  },

  async isDataShared(address: string): Promise<boolean> {
    await mockDelay(500);
    return mockStorage.sharedData.has(address.toLowerCase());
  },

  async optOut(address: string): Promise<string> {
    await mockDelay();
    mockStorage.sharedData.delete(address.toLowerCase());
    return generateMockTxHash();
  },

  async verifyThreshold(): Promise<boolean> {
    await mockDelay();
    return Math.random() > 0.3; // 70% approval rate
  },

  async executeQuery(): Promise<{ txHash: string; patientCount: number; averageAge: number }> {
    await mockDelay();
    return {
      txHash: generateMockTxHash(),
      patientCount: Math.floor(Math.random() * 100) + 20,
      averageAge: 25 + Math.random() * 20,
    };
  },
};
