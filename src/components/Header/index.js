import React, { Component, createRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-scroll';
import { withRouter } from 'react-router-dom';
import { updateLoginModalVisible } from '../../store';
import { shortHash } from '../../utils/_';
import { logoutWallet } from '../../utils/wallet';

import Img_Twiter           from '../../assets/images/icons/twitter.svg';
import Img_Subtract         from '../../assets/images/icons/subtract.svg';
import Img_Medium           from '../../assets/images/icons/medium.svg';
import Img_Reddit           from '../../assets/images/icons/reddit.svg';
import Img_Youtube          from '../../assets/images/icons/youtube.svg';
import Img_Telegram         from '../../assets/images/icons/telegram.svg';

import './index.scss';

class Header extends Component {
    logRef = createRef();
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            isLogVisible: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.HideLogDropdown);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.HideLogDropdown);
    }

    HideLogDropdown = (event) => {
        if (this.logRef && !this.logRef.current?.contains(event.target)) {
          this.setState({
            isLogVisible: false,
          });
        }
    };

    onLogout = () => {
        this.setState({
          isLogVisible: false,
        });
        this.props.history.push('/');
    };

    onNavClick = () => {
        this.setState({showMenu: !this.state.showMenu});
    }

    gotoHomePage = () => {
        this.props.history.push('/');
    }

    onDisconnect = (event) => {
        this.setState({
          isLogVisible: false,
        });
        event.preventDefault();
        event.stopPropagation();
        this.gotoHomePage();
        logoutWallet();
    }

    render() {
        const { address } = this.props;
        return (
            <div className="Header">
                <div className="content">
                    <div className="header__title" onClick={this.gotoHomePage}>
                        <div className="purple__circle"/>
                        <div className="zora__text">Zora</div>
                        <div className="beta">(beta)</div>
                    </div>
                    <Link className="nav__item" to="products" spy={true} smooth={true}>About</Link>
                    <Link className="nav__item" to="pricing" spy={true} smooth={true}>Credit</Link>
                    <Link className="nav__item" to="resources" spy={true} smooth={true}>Privacy</Link>
                    <div className="subcontent">
                        <div className="item" onClick={() => window.open("https://twitter.com/z0racles")}>
                            <img src={Img_Twiter} alt="" className="social"/>
                        </div>
                        <div className="item" onClick={() => window.open("https://discord.com/invite/DSYQYAqEUX")}>
                            <img src={Img_Subtract} alt="" className="social"/>
                        </div>
                        <div className="item" onClick={() => window.open("https://www.youtube.com/channel/UCFx9FbUYK38_HhSm9DL38fQ")}>
                            <img src={Img_Youtube} alt="" className="social"/>
                        </div>
                        <div className="item" onClick={() => window.open("https://www.reddit.com/r/Zoracles/")}>
                            <img src={Img_Reddit} alt="" className="social"/>
                        </div>
                        <div className="item" onClick={() => window.open("https://zoracles.medium.com/")}>
                            <img src={Img_Medium} alt="" className="social"/>
                        </div>
                        <div className="item" onClick={() => window.open("https://t.me/zoracles")}>
                            <img src={Img_Telegram} alt="" className="social tg"/>
                        </div>
                    </div>
                    {address?
                        <div className="button__signup" onClick={() => {
                            this.setState({isLogVisible: true});
                        }}>
                            {shortHash(address)}
                            {this.state.isLogVisible?
                                <div className="dropdownlist" ref={this.logRef}>
                                    <div className="dropdown__item" onClick={this.onDisconnect}>Disconnect Wallet</div>
                                </div>:(null)}
                        </div>:
                        <div className="button__signup" onClick={() => this.props.updateLoginModalVisible(1)}>Connect your wallet</div>
                    }
                    <div className="button__nav" onClick={this.onNavClick}>
                        {this.state.showMenu?
                            <i className="fa fa-times"></i>:
                            <i className="fa fa-bars"></i>}
                    </div>
                </div>
                {this.state.showMenu && <div className="menu__dropdown">
                    <div className="nav__item">About</div>
                    <div className="nav__item">Credit</div>
                    <div className="nav__item">Privacy</div>
                </div>}
            </div>
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

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);