import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import {Seo} from '@core/components/seo';
import {getI18nText} from '@core/helpers/get-i18n-text';
import WALLET_I18N_TEXT from '@locales/wallet.json';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '@store';
import {Loading} from '@core/components/loading';
import {Button} from '@core/components/button';

const METAMASK_INSTALLATION_URL =
  'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en';

export const Wallet: NextPage = (): JSX.Element => {
  const router = useRouter();
  const wallet = useSelector((state: RootState) => state.wallet);
  const {
    wallet: {connectToMetaMask, logout},
  } = useDispatch<Dispatch>();

  const openMetaMaskInstallationUrl = (): void => {
    window.open(METAMASK_INSTALLATION_URL, 'blank');
  };

  const reloadPage = (): void => {
    window.location.reload();
  };

  return (
    <div className='flex flex-col'>
      <Seo />
      {wallet.metaMaskState === 'INITIATING' && (
        <>
          <Loading className='h-10 w-10' />
          <div>{getI18nText(WALLET_I18N_TEXT, 'LOADING', router)}...</div>
        </>
      )}
      {wallet.metaMaskState === 'NOT_INSTALLED' && (
        <>
          <div className='text-error dark:text-error-light'>MetaMask is not installed!</div>
          <Button type='button' onClick={openMetaMaskInstallationUrl} className='w-96'>
            {getI18nText(WALLET_I18N_TEXT, 'INSTALL_METAMASK', router)}
          </Button>
          <Button type='button' onClick={reloadPage} className='w-96 mt-2' variant='outline'>
            {getI18nText(WALLET_I18N_TEXT, 'INSTALLED_AND_RELOAD', router)}
          </Button>
        </>
      )}
      {wallet.metaMaskState === 'INSTALLED' && (
        <>
          <Button type='button' onClick={connectToMetaMask} className='w-96'>
            {getI18nText(WALLET_I18N_TEXT, 'CONNECT_TO_METAMASK', router)}
          </Button>
        </>
      )}
      {wallet.metaMaskState === 'CONNECTED' && (
        <>
          <div>
            <span className='inline-block w-40'>{getI18nText(WALLET_I18N_TEXT, 'ACCOUNT_ADDRESS', router)}:</span>
            <span className='font-bold'>{wallet.address}</span>
          </div>
          <div>
            <span className='inline-block w-40'>{getI18nText(WALLET_I18N_TEXT, 'NETWORK', router)}: </span>
            <span className='font-bold'>{wallet.network.name} &nbsp;</span>
            <span>
              ({getI18nText(WALLET_I18N_TEXT, 'CHAIN_ID', router)}:{' '}
              <span className='font-bold'>{wallet.network.chainId.toString()}</span>)
            </span>
          </div>
          <div>
            <span className='inline-block w-40'>{getI18nText(WALLET_I18N_TEXT, 'BALANCE', router)}: </span>
            <span className='font-bold'>{wallet.balance}</span>
          </div>
          <div>
            <span className='inline-block w-40'>{getI18nText(WALLET_I18N_TEXT, 'GAS_PRICE', router)}: </span>
            <span className='font-bold'>{wallet.gasPrice}</span>
          </div>
          <Button type='button' onClick={logout} className='w-96'>
            Log out
          </Button>
        </>
      )}
    </div>
  );
};
