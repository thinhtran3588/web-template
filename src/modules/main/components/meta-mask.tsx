import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import type {Dispatch} from '@store';

export const MetaMask = (): JSX.Element => {
  const {
    wallet: {initializeMetaMask},
  } = useDispatch<Dispatch>();

  useEffect(() => {
    const removeWalletListeners = initializeMetaMask({});

    return () => {
      removeWalletListeners();
    };
  }, [initializeMetaMask]);

  return <></>;
};
