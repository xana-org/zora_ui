import { ethers } from 'ethers';
import { IS_ETH } from './const';

import { changeAddress, updateLoginModalVisible } from '../store';

let signer = null;
let provider = null;
let inited = false;

window.addEventListener('beforeunload', () => {
    if (provider) {
      provider.disconnect();
    }
}, false);

export function getProvider() {
    return provider;
}

export function getSigner() {
    return signer;
}

export function logoutWallet() {
    changeAddress("");
    signer = null;
    provider = null;
    inited = false; 
}

export async function connectWallet(method) {
    if (inited) {
        updateLoginModalVisible(0);
        return true;
    }
    if (!IS_ETH) {
        updateLoginModalVisible(2);
        return false;
    }
    switch(method) {
        case 'METAMASK':
            provider = window.ethereum;
            signer = new ethers.providers.Web3Provider(provider).getSigner();
            window.ethereum.on('accountsChanged', () => {
              const ads = window.ethereum.selectedAddress;
              changeAddress(ads);
            });
      
            const ads = await window.ethereum.request({
              method: 'eth_requestAccounts',
            });
      
            changeAddress(ads[0]);
            inited = true;
            updateLoginModalVisible(0);
            break;
        default:
            return false;
    }
}