import { createStore } from 'redux';
import {
    CHANGE_ADDRESS,
    onChangeAddress,
    SHOWHIDE_LOGINMODAL,
    onShowHideLoginModal
} from './action';
import state from './state';

function reducer(prevState, action) {
    const { type, payload } = action;
    switch(type) {
        case CHANGE_ADDRESS:
            return {
                ...prevState,
                address: payload
            }
        case SHOWHIDE_LOGINMODAL:
            return {
                ...prevState,
                lgModalVisible: payload
            }
        default:
            return prevState;
    }
}

const store = createStore(reducer, state);

export const changeAddress = (address) => {
    store.dispatch(onChangeAddress(address));
}

export const updateLoginModalVisible = (visible) => {
    store.dispatch(onShowHideLoginModal(visible));
}

export default store;