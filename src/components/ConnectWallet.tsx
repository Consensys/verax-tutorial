import { useMemo } from 'react';
import './ConnectWallet.css';
// eslint-disable-next-line import/no-unresolved
import { useAppKit } from '@reown/appkit/react';
import { useConnection, useEnsName } from 'wagmi';

function ConnectWallet() {
  const { address, isConnected } = useConnection();
  const { open } = useAppKit();
  const { data: ensName } = useEnsName({
    address,
    chainId: 1,
  });

  const truncatedAddress = useMemo(() => {
    if (!address) return undefined;
    return `${address.slice(0, 6)}••••${address.slice(address.length - 4, address.length)}`;
  }, [address]);

  return (
    <button onClick={() => open()} className={'connect-wallet'}>
      {isConnected ? (ensName ?? truncatedAddress) : 'CONNECT WALLET'}
    </button>
  );
}

export default ConnectWallet;
