export enum Blockchains {
  None = '',
  Networks = 'Networks',
}

export const BlockchainLabelMap = new Map<Blockchains, string>([
  [Blockchains.None, ''],
  [Blockchains.Networks, 'Networks'],
]);

export const getBlockchainLabel = (
  blockchain: Blockchains,
): string | undefined => BlockchainLabelMap.get(blockchain);

export const getBlockchainBySlug = (slug: string): Blockchains => {
  switch (slug) {
    case 'networks':
      return Blockchains.Networks;
    default:
      return Blockchains.None;
  }
};
