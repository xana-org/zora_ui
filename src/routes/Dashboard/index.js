import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getScore } from '../../utils/api';
import './index.scss';
const Chart = require('chart.js');

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myChart: null,
            rating: -1,
            ethBalance: 0,
            txCount: 0,
            loaded: false,
        }
    }
    drawChart(res, id1, id2) {
        var options1 = {
            type: 'doughnut',
            data: {
                labels: ["blue", "Orange", "Green"],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [45, 12, 12, 12, 18],
                        backgroundColor: [
                            '#3391DF',
                            '#3391DF',
                            '#3391DF',
                            '#3391DF',
                            '#3391DF'
                        ],
                        borderColor: [
                            'rgba(255, 255, 255 ,1)',
                            'rgba(255, 255, 255 ,1)',
                            'rgba(255, 255, 255 ,1)',
                            'rgba(255, 255, 255 ,1)',
                            'rgba(255, 255, 255 ,1)'
                        ],
                        borderWidth: 5
                    }
                ]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                },
                cutoutPercentage: 92
            }
        }
        
        var ctx1 = document.getElementById(id1)?.getContext('2d');
        new Chart(ctx1, options1);
        let score = 0;
        if (res && res.result) {
            score = Math.floor(res.result.rating * 10);
            this.setState({
                rating: res.result.rating,
                ethBalance: res.result.ethBalance,
                txCount: res.result.txCount,
            })
        }
        var options2 = {
            type: 'doughnut',
            data: {
                labels: ["", "Purple", ""],
                datasets: [
                    {
                        data: [score - 1, 2,99 - score],
                        backgroundColor: [
                            "rgba(0,0,0,0)",
                            "rgba(255,255,255,1)",
                            "rgba(0,0,0,0)",
                        ],
                        borderColor: [
                        'rgba(0, 0, 0 ,0)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(0, 0, 0 ,0)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                cutoutPercentage: 92,
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        }
        
        var ctx2 = document.getElementById(id2).getContext('2d');
        new Chart(ctx2, options2);
    }
    async initilize(addr) {
        let res = await getScore("https://cors-anywhere.herokuapp.com/http://gov.zoracles.com/rating/" + addr);
        this.drawChart(res, "chartJSContainer", "secondContainer");
        this.drawChart(res, "chartJSContainer1", "secondContainer1");
    }
    componentDidMount() {
        if (!this.props.address) this.props.history.push('/');
    }
    componentDidUpdate() {
        if (!this.state.loaded && document.getElementById("chartJSContainer")?.getContext('2d')) {
            this.setState({
                loaded: true
            })
            this.initilize(this.props.address);
        }
    }
    render() {
        return (
            <div className="Dashboard">
                <div className="content">
                    <div className="dialog">
                        <div className="close__dialog">
                            <i className="fa fa-times"></i>
                        </div>
                        <div className="dialog__text">
                            <div>Zora Credit Lines</div>
                            <span>(coming soon)</span>
                        </div>
                        <div className="button__receive">Receive instant crypto credit</div>
                    </div>
                    <div className="chart-block">
                        <div className="outer">
                            <canvas id="chartJSContainer" width="600" height="400"></canvas>
                            <canvas id="secondContainer" width="600" height="400"></canvas>
                            <p className="percent">
                                {this.state.rating === -1?'Loading...':Number.parseFloat(this.state.ethBalance).toFixed(2)}
                            </p>
                            <div className="credit__text">
                                Ethereum Balance
                            </div>
                        </div>
                        <div className="outer">
                            <canvas id="chartJSContainer1" width="600" height="400"></canvas>
                            <canvas id="secondContainer1" width="600" height="400"></canvas>
                            <p className="percent">
                                {this.state.rating === -1?'Loading...':Number.parseFloat(this.state.rating).toFixed(2)}
                            </p>
                            <div className="credit__text">
                                Crypto Credit Score
                            </div>
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
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dashboard);