import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-scroll';
import { updateLoginModalVisible } from '../../store';
import { shortHash } from '../../utils/_';

import Img_Twiter           from '../../assets/images/icons/twitter.svg';
import Img_Subtract         from '../../assets/images/icons/subtract.svg';
import Img_Medium           from '../../assets/images/icons/medium.svg';
import Img_Reddit           from '../../assets/images/icons/reddit.svg';
import Img_Youtube          from '../../assets/images/icons/youtube.svg';

import './index.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }
    onNavClick = () => {
        this.setState({showMenu: !this.state.showMenu});
    }
    render() {
        const { address } = this.props;
        return (
            <div className="Header">
                <div className="content">
                    <div className="header__title">
                        <div className="purple__circle"/>
                        <div className="zora__text">Zora</div>
                    </div>
                    <Link className="nav__item" to="products" spy={true} smooth={true}>Products</Link>
                    <Link className="nav__item" to="pricing" spy={true} smooth={true}>Pricing</Link>
                    <Link className="nav__item" to="resources" spy={true} smooth={true}>Resources</Link>
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
                    </div>
                    {address?
                        <div className="button__signup">{shortHash(address)}</div>:
                        <div className="button__signup" onClick={() => this.props.updateLoginModalVisible(1)}>Connect your wallet</div>
                    }
                    <div className="button__nav" onClick={this.onNavClick}>
                        {this.state.showMenu?
                            <i className="fa fa-times"></i>:
                            <i className="fa fa-bars"></i>}
                    </div>
                </div>
                {this.state.showMenu && <div className="menu__dropdown">
                    <div className="nav__item">Products</div>
                    <div className="nav__item">Pricing</div>
                    <div className="nav__item">Resources</div>
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(Header);