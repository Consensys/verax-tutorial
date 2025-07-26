import { useEffect, useState } from 'react';
import './ConnectWallet.css';
// eslint-disable-next-line import/no-unresolved
import { useAppKit } from '@reown/appkit/react';
import { useAccount, useEnsName } from 'wagmi';

function ConnectWallet() {
  const [truncatedAddress, setTruncatedAddress] = useState<string>();

  const { address, isConnected } = useAccount();
  const { open } = useAppKit();
  const { data: ensName } = useEnsName({
    address,
    chainId: 1,
  });

  useEffect(() => {
    if (address) {
      setTruncatedAddress(`${address.slice(0, 6)}••••${address.slice(address.length - 4, address.length)}`);
    }
  }, [address]);

  return (
    <button onClick={() => open()} className={'connect-wallet'}>
      {isConnected ? (ensName ?? truncatedAddress) : 'CONNECT WALLET'}
    </button>
  );
}

export default ConnectWallet;
