import { Blockchains } from '@core/enums/blockchains';
import { Network } from './Network/providers/walletProvider';

const blockchainNetworks = {
  optimism: {
    [Blockchains.Network]: Network.Optimism,
  },
  base: {
    [Blockchains.Network]: Network.Base,
  },
  zora: {
    [Blockchains.Network]: Network.Zora,
  },
  mode: {
    [Blockchains.Network]: Network.Mode,
  },
};

export const getBlockchainNetwork = (
  blockchain: Blockchains,
  environment: string,
): Network | null => {
  return blockchainNetworks[environment]?.[blockchain] || null;
};

const blockchainNetworkLabels = {
  optimism: {
    [Blockchains.Network]: 'Optimism Network',
  },
  base: {
    [Blockchains.Network]: 'Base Network',
  },
  zora: {
    [Blockchains.Network]: 'Zora Network',
  },
  mode: {
    [Blockchains.Network]: 'Mode Network',
  },
};

export const getBlockchainNetworkLabel = (
  blockchain: Blockchains,
  environment: string,
): string => {
  return blockchainNetworkLabels[environment]?.[blockchain] || '';
};
