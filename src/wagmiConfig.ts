import { arbitrumSepolia, baseSepolia, bscTestnet, lineaSepolia, mainnet } from 'wagmi/chains';
import { defaultWagmiConfig } from '@web3modal/wagmi';
import { http } from 'wagmi';

export const walletConnectProjectId = '1640042ae61e8c357b5b6034df2b7821';
const infuraApiKey: string = '2VbuXFYphoB468fyFPinOmis7o5';

const metadata = {
  name: 'Verax | Tutorial',
  description: 'A tutorial for building with Verax',
  url: 'https://tutorial.examples.ver.ax',
  icons: ['https://tutorial.examples.ver.ax/favicon.ico'],
};

const chains = [lineaSepolia, arbitrumSepolia, baseSepolia, bscTestnet, mainnet] as const;
export const wagmiConfig = defaultWagmiConfig({
  projectId: walletConnectProjectId,
  metadata,
  chains,
  transports: {
    [lineaSepolia.id]: http(`https://linea-sepolia.infura.io/v3/${infuraApiKey}`),
    [arbitrumSepolia.id]: http(`https://arbitrum-sepolia.infura.io/v3/${infuraApiKey}`),
    [baseSepolia.id]: http(`https://base-sepolia.infura.io/v3/${infuraApiKey}`),
    [bscTestnet.id]: http(`https://bsc-testnet.infura.io/v3/${infuraApiKey}`),
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${infuraApiKey}`),
  },
});
