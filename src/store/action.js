export const CHANGE_ADDRESS = 'CHANGE_ADDRESS';
export function onChangeAddress(address) {
    return {
        type: CHANGE_ADDRESS,
        payload: address
    };
}

export const SHOWHIDE_LOGINMODAL = 'SHOWHIDE_LOGINMODAL';
export function onShowHideLoginModal(visible) {
    return {
        type: SHOWHIDE_LOGINMODAL,
        payload: visible
    }
}