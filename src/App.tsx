import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletModalProvider } from '@tronweb3/tronwallet-adapter-react-ui';
import { type FC, useMemo, useRef } from 'react';

import '@tronweb3/tronwallet-adapter-react-ui/style.css';
import { TestPage } from './pages/TestPage';

import { MetaMaskAdapter as MetaMaskConnectTronAdapter } from '@metamask/connect-tron';
import {
  TronLinkAdapter,
  MetaMaskAdapter as TronWeb3MetaMaskAdapter,
  WalletConnectAdapter,
} from '@tronweb3/tronwallet-adapters';
import { getWCNetworkName } from './config';
import { AdapterVariantProvider, useAdapterVariant } from './contexts/AdapterVariantContext';
import { NetworkProvider, NetworkSelectionProvider, useNetworkSelection } from './contexts/NetworkContext';

const AppContent: FC = () => {
  const { variant } = useAdapterVariant();
  const { selectedNetwork } = useNetworkSelection();

  // WalletConnect is only available on Mainnet — Shasta and Nile testnets
  // are not supported, so the connector is hidden there entirely.
  const isMainnet = selectedNetwork === 'mainnet';

  // Capture the network at mount time so the WalletConnectAdapter is only
  // created once per (variant, category) change. Switching between mainnet
  // and a testnet remounts WalletProvider via the `key` prop below; switches
  // within the same category are handled by NetworkProvider.switchChain.
  const initialNetwork = useRef(selectedNetwork);

  const wallets = useMemo(
    () => [
      new TronLinkAdapter(),
      variant === 'metamask' ? new MetaMaskConnectTronAdapter() : new TronWeb3MetaMaskAdapter(),
      ...(isMainnet
        ? [
            new WalletConnectAdapter({
              network: getWCNetworkName[initialNetwork.current],
              options: {
                projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? '',
                metadata: {
                  name: 'MetaMask Tron Test DApp',
                  description: 'Test DApp for Tron',
                  url: window.location.origin,
                  icons: [],
                },
              },
            }),
          ]
        : []),
    ],
    [variant, isMainnet],
  );

  return (
    <WalletProvider key={`${variant}-${isMainnet ? 'mainnet' : 'testnet'}`} adapters={wallets} autoConnect={true}>
      <WalletModalProvider>
        <NetworkProvider>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: '100vh',
              width: '100vw',
              padding: '1rem',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '1600px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <TestPage />
            </div>
          </div>
        </NetworkProvider>
      </WalletModalProvider>
    </WalletProvider>
  );
};

export const App: FC = () => {
  return (
    <NetworkSelectionProvider>
      <AdapterVariantProvider>
        <AppContent />
      </AdapterVariantProvider>
    </NetworkSelectionProvider>
  );
};
