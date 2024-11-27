// eslint-disable-next-line import/no-unresolved
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { wagmiConfig, walletConnectProjectId } from './wagmiConfig.ts';
import { lineaSepolia } from 'wagmi/chains';
import BaseSepoliaIcon from './assets/base-sepolia.svg';
import LineaSepoliaIcon from './assets/linea-sepolia.svg';
import ArbitrumSepoliaIcon from './assets/arbitrum-sepolia.svg';
import BscTestnetIcon from './assets/bsc-testnet.svg';

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig,
  projectId: walletConnectProjectId,
  enableAnalytics: true,
  defaultChain: lineaSepolia,
  chainImages: {
    59_141: LineaSepoliaIcon,
    421_614: ArbitrumSepoliaIcon,
    84_532: BaseSepoliaIcon,
    97: BscTestnetIcon,
  },
});

interface Web3ProviderProps {
  children: ReactNode;
}

export function Web3Provider({ children }: Readonly<Web3ProviderProps>) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
