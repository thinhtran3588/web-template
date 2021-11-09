import {createModel, RematchDispatch, RematchRootState} from '@rematch/core';
import {providers, utils} from 'ethers';
import MetaMaskOnboarding from '@metamask/onboarding';
import type {RootModel} from '@store/models';

type MetaMaskState = 'INITIATING' | 'NOT_INSTALLED' | 'INSTALLED' | 'CONNECTED';

export interface WalletState {
  metaMaskState: MetaMaskState;
  address: string;
  network: {
    chainId: number;
    name: string;
  };
  balance: string;
  gasPrice: string;
}

const state: WalletState = {
  metaMaskState: 'INITIATING',
  address: '',
  network: {
    chainId: -1,
    name: '',
  },
  balance: '',
  gasPrice: '',
};

let provider: providers.Web3Provider;

const setMetaMaskState = (draftState: WalletState, metaMaskState: MetaMaskState): WalletState => {
  draftState.metaMaskState = metaMaskState;
  return draftState;
};

const setAccount = (draftState: WalletState, newState: WalletState): WalletState => {
  Object.assign(draftState, newState);
  return draftState;
};

const logout = (draftState: WalletState): WalletState => {
  Object.assign(draftState, {...state, metaMaskState: 'INSTALLED'});
  return draftState;
};

const updateAccount = async (dispatch: RematchDispatch<RootModel>): Promise<void> => {
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const [network, balance, gasPrice] = await Promise.all([
    provider.getNetwork(),
    provider.getBalance(address),
    provider.getGasPrice(),
  ]);
  dispatch.wallet.setAccount({
    metaMaskState: 'CONNECTED',
    network: {
      chainId: network.chainId,
      name: network.name,
    },
    address,
    balance: utils.formatEther(balance),
    gasPrice: utils.formatEther(gasPrice),
  });
};

const initializeMetaMask = (
  dispatch: RematchDispatch<RootModel>,
  _payload: unknown,
  _rootState: RematchRootState<RootModel>,
): (() => void) => {
  if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
    dispatch.wallet.setMetaMaskState('NOT_INSTALLED');
    return () => {
      // do nothing
    };
  }

  dispatch.wallet.setMetaMaskState('INSTALLED');
  provider = new providers.Web3Provider(window.ethereum, 'any');
  const handleAccountChanged = async (newAccounts: []): Promise<void> => {
    if (newAccounts.length === 0) {
      dispatch.wallet.setAccount({...state, metaMaskState: 'INSTALLED'});
      return;
    }
    updateAccount(dispatch);
  };

  const handleChainChanged = async (): Promise<void> => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    window.location.reload();
  };
  window.ethereum.on('accountsChanged', handleAccountChanged);
  window.ethereum.on('chainChanged', handleChainChanged);

  return () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled() && window.ethereum && window.ethereum.off) {
      window.ethereum.off('accountsChanged', handleAccountChanged);
      window.ethereum.off('chainChanged', handleChainChanged);
    }
  };
};

const connectToMetaMask = async (dispatch: RematchDispatch<RootModel>): Promise<void> => {
  await provider.send('eth_requestAccounts', []);
  await updateAccount(dispatch);
};

export const wallet = createModel<RootModel>()({
  state,
  reducers: {
    setMetaMaskState,
    setAccount,
    logout,
  },
  effects: (dispatch) => ({
    initializeMetaMask: (payload, rootState) => initializeMetaMask(dispatch, payload, rootState),
    connectToMetaMask: async () => connectToMetaMask(dispatch),
  }),
});
