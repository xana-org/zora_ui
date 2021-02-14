import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { updateLoginModalVisible } from '../../store';
import { Controller, Scene } from 'react-scrollmagic';
import SquareParticle from "./SquareParticle";
import './index.scss';

import Img_Banner1  from '../../assets/images/homepage/1.png';
import Img_Banner2  from '../../assets/images/homepage/2.png';
import Img_Banner3  from '../../assets/images/homepage/3.png';
import Img_Banner4  from '../../assets/images/homepage/4.png';
import Img_Banner5  from '../../assets/images/homepage/5.svg';
import Img_Banner6  from '../../assets/images/homepage/6.png';
import Img_Bloom    from '../../assets/images/homepage/bloomberg.png';
import Img_Yahoo    from '../../assets/images/homepage/yahoo.png';
import Img_entre    from '../../assets/images/homepage/entrepreneur.png';
import Img_hacker   from '../../assets/images/homepage/hacker.png';

class HomePage extends Component {
    componentDidUpdate() {
        if (this.props.address) this.props.history.push("/dashboard");
    }
    onSeeMyScore = () => {
        if (this.props.address) this.props.history.push("/dashboard");
        else this.props.updateLoginModalVisible(1)
    }
    render() {
        return (
            <div className="HomePage">
                <div className="space"/>
                <div className="on__chain">
                    <SquareParticle/>
                    <div className="texts fadeInDown" id="products">
                        <div className="pink__text">Blockchain Credit Scores</div>
                        <div className="black__text">Free real-time reporting</div>
                        <div className="seperator"/>
                        <div className="description">Our unique algorithm assess on-chain creditworthiness.</div>
                        <div className="button__show" onClick={this.onSeeMyScore}>Get my score</div>
                    </div>
                </div>
                <div className="space1"/>
                {/* <div id="trigger1"/>
                <Controller>
                    <Scene classToggle="trigger1" triggerElement="#trigger1">
                        {(progress, event) => ( */}
                            <div className="banner__block">
                                <div className="pink__text">Your transaction history and more</div>
                                <div className="seperator"/>
                                <div className="banner__container">
                                    <div className="banner__box">
                                        <div className="item__no">
                                            <div className="back">
                                                <div className="text">1</div>
                                            </div>
                                        </div>
                                        <div className="banner__title">Ratings</div>
                                        <div className="banner__image">
                                            <img src={Img_Banner1} alt=""/>
                                        </div>
                                    </div>
                                    <div className="banner__box">
                                        <div className="item__no">
                                            <div className="back">
                                                <div className="text">2</div>
                                            </div>
                                        </div>
                                        <div className="banner__title">Data</div>
                                        <div className="banner__image">
                                            <img src={Img_Banner2} alt=""/>
                                        </div>
                                    </div>
                                    <div className="banner__box last">
                                        <div className="item__no">
                                            <div className="back">
                                                <div className="text">3</div>
                                            </div>
                                        </div>
                                        <div className="banner__title">Credit</div>
                                        <div className="banner__image">
                                            <img src={Img_Banner3} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* )}
                    </Scene>
                </Controller>  */}
                <div id="trigger2"/>
                <Controller>
                    <Scene classToggle="trigger1" triggerElement="#trigger2">
                        {(progress, event) => (
                            <div className="follow__container" id="pricing">
                                <div className="pink__text">Get crypto instantly</div>
                                <div className="seperator"/>
                                <div className="follow__box">
                                    <div className="follow__image">
                                        <img src={Img_Banner4} alt=""/>
                                    </div>
                                    <div className="follow__contnet">
                                        <div className="follow__title">Based on your account history</div>
                                        <div className="follow__description">You can receive Zora</div>
                                        <div className="button__doit" onClick={this.onSeeMyScore}>Let's do it</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Scene>
                </Controller> 
                <div id="trigger3"/>
                <Controller>
                    <Scene classToggle="trigger1" triggerElement="#trigger3">
                        {(progress, event) => (
                            <div className="data__container" id="resources">
                                <div className="pink__text">Oracle data analyzed to provide confidential credit reporting</div>
                                <div className="seperator"/>
                                <div className="data__box">
                                    <div className="data__content">
                                        <div className="data__img">
                                            <img src={Img_Banner5} alt=""/>
                                        </div>
                                        <div className="data__title">Security</div>
                                        <div className="data__description">We use SSL on our web interface to securely transmit data</div>
                                    </div>
                                    <div className="data__content">
                                        <div className="data__img">
                                            <img src={Img_Banner6} alt=""/>
                                        </div>
                                        <div className="data__title">Privacy</div>
                                        <div className="data__description">Our ZK-Snark Technology is leveraged to confidentially provide credit reporting</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Scene>
                </Controller>
                <div className="faq__container">
                    <div className="faq__content">
                        <div className="faq__container__title">Trusted by our customers and partners</div>
                        <div className="partners">
                            <div className="logo"
                                onClick={() => window.open("https://www.bloomberg.com/press-releases/2020-11-23/zoracles-launches-snarks-as-a-service-for-confidential-credit-checks")}
                            ><img src={Img_Bloom} alt=""></img></div>
                            <div className="logo"
                                onClick={() => window.open("https://finance.yahoo.com/news/zoracles-launches-snarks-confidential-credit-163000563.html")}
                            ><img src={Img_Yahoo} alt=""></img></div>
                            <div className="logo"
                                onClick={() => window.open("https://www.entrepreneur.com/article/362584")}
                            ><img src={Img_entre} alt=""></img></div>
                            <div className="logo"
                                onClick={() => window.open("https://hackernoon.com/crypto-series-2-zero-knowledge-oracles-uniswap-and-decentralized-games-3eh3z7p")}
                            ><img src={Img_hacker} alt=""></img></div>
                        </div>
                    </div>
                </div>
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(withRouter(HomePage));