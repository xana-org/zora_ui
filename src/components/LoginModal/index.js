import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Modal } from 'antd';

import {
    updateLoginModalVisible
} from '../../store';

import { connectWallet } from '../../utils/wallet';

import Img_Metamask from '../../assets/images/login/metamask.svg';
import Img_WalletConnect from '../../assets/images/login/wc.png';
import './index.scss';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    InstallMetaMask = () => {
        window.open("https://metamask.io/");
        this.props.updateLoginModalVisible(0);
    }
    
    render() {
        const { lgModalVisible } = this.props;
        if (!lgModalVisible) return (null);
        if (lgModalVisible === 1)
            return (
                <Modal
                    title="Connect Wallet"
                    visible={true}
                    footer={null}
                    onCancel={() => this.props.updateLoginModalVisible(0)}
                >
                    <div className="LoginModal">
                        <div className="wallet" onClick={() => connectWallet("METAMASK")}>
                            <div className="wallet__text">Metamask</div>
                            <img src={Img_Metamask} alt=""/>
                        </div>
                        <div className="wallet">
                            <div className="wallet__text">WalletConnect</div>
                            <img src={Img_WalletConnect} alt=""/>
                        </div>
                    </div>
                </Modal>
            )
        return (
            <Modal
                title="Connect Wallet"
                visible={true}
                footer={null}
                onCancel={() => this.props.updateLoginModalVisible(0)}
            >
                <div className="LoginModal">
                    <div className="warning__text">Metamask is not installed, please install and try again</div>
                    <div className="install__button" onClick={this.InstallMetaMask}>Install Metamask</div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateLoginModalVisible: updateLoginModalVisible
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(LoginModal);