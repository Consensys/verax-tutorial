import { arbitrum, arbitrumSepolia, base, baseSepolia, linea, lineaSepolia, mainnet } from 'wagmi/chains';
import { defaultWagmiConfig } from '@web3modal/wagmi';

export const walletConnectProjectId = '1640042ae61e8c357b5b6034df2b7821';

const metadata = {
  name: 'Verax | Tutorial',
  description: 'A tutorial for building with Verax',
  url: 'https://tutorial.examples.ver.ax',
  icons: ['https://tutorial.examples.ver.ax/favicon.ico'],
};

const chains = [lineaSepolia, linea, arbitrumSepolia, arbitrum, baseSepolia, base, mainnet] as const;
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId: walletConnectProjectId,
  metadata,
});
