import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './index.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {;
        return (
            <div className="Footer">
                <div className="content">
                    <div className="footer__box">
                        <div className="footer__subtitle">ABOUT ZORACLES.</div>
                        <div className="footer__description">Zoracles partners with DeFi projects using Open Oracle with zero-knowledge proofs to provide confidential data to smart contracts.</div>
                    </div>
                    <div className="footer__box">
                        <div className="footer__subtitle">QUICK LINKS</div>
                        <div className="footer__link">Home</div>
                        <div className="footer__link" onClick={() => window.open("https://zoracles.com/whitepaper_v1.pdf")}>Whitepaper</div>
                        <div className="footer__link" onClick={() => window.open("https://github.com/zoracles")}>Github</div>
                        <div className="footer__link" onClick={() => window.open("https://zoracles.com/faq.pdf")}>FAQ</div>
                    </div>
                    <div className="footer__box align__right">
                        <div className="footer__subtitle">MORE LINKS</div>
                        <div className="footer__link" onClick={() => window.open("https://discord.com/invite/DSYQYAqEUX")}>Discord</div>
                        <div className="footer__link" onClick={() => window.open("https://t.me/zoracles")}>Telegram</div>
                        <div className="footer__link" onClick={() => window.open("https://zoracles.medium.com/")}>Medium</div>
                        <div className="footer__link" onClick={() => window.open("https://twitter.com/z0racles")}>Twitter</div>
                        <div className="footer__link" onClick={() => window.open("https://www.reddit.com/r/Zoracles/")}>Reddit</div>
                        <div className="footer__link" onClick={() => window.open("https://www.youtube.com/channel/UCFx9FbUYK38_HhSm9DL38fQ")}>YouTube</div>
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
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Footer);