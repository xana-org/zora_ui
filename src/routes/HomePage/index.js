import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { updateLoginModalVisible } from '../../store';
import './index.scss';

import Img_Banner1  from '../../assets/images/homepage/1.png';
import Img_Banner2  from '../../assets/images/homepage/2.png';
import Img_Banner3  from '../../assets/images/homepage/3.png';
import Img_Banner4  from '../../assets/images/homepage/4.png';
import Img_Banner5  from '../../assets/images/homepage/5.svg';
import Img_Banner6  from '../../assets/images/homepage/6.png';
import Img_Star1    from '../../assets/images/homepage/stars.png';
import Img_Star2    from '../../assets/images/homepage/star1.svg';

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
                <div className="back__style">
                    <img src={Img_Star1} alt="" className="star-back"/>
                    <img src={Img_Star2} alt="" className="star1"/>
                </div>
                <div className="on__chain" id="products">
                    <div className="pink__text">Blockchain Credit is Born</div>
                    <div className="black__text">No collateral needed</div>
                    <div className="seperator"/>
                    <div className="description">Our innovative algorithm provides real-time updates.</div>
                    <div className="button__show" onClick={this.onSeeMyScore}>Get my score</div>
                </div>
                <div className="banner__block">
                    <div className="pink__text">You blockchain credit and more</div>
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
                            <div className="banner__description">Get alerted when there's an important change on your reports.</div>
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
                            <div className="banner__description">Learn what affects your credit scores and what you can do to improve them.</div>
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
                            <div className="banner__description">See personalized recommendations for ways to use your credit more wisely.</div>
                        </div>
                    </div>
                </div>
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
                <div className="data__container" id="resources">
                    <div className="pink__text">We use on-chain data to securely rate your account</div>
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