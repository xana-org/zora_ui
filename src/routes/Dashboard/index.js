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
        }
    }
    async initilize(addr) {
        let res = await getScore("https://cors-anywhere.herokuapp.com/http://gov.zoracles.com/rating/" + addr);
        var options1 = {
            type: 'doughnut',
            data: {
                labels: ["Red", "Orange", "Green"],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [33, 33, 33],
                        backgroundColor: [
                            'rgba(231, 76, 60, 1)',
                            'rgba(255, 164, 46, 1)',
                            'rgba(46, 204, 113, 1)'
                        ],
                        borderColor: [
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
          
        var ctx1 = document.getElementById('chartJSContainer').getContext('2d');
        new Chart(ctx1, options1);
        const score = Math.floor(res.result.rating * 10);
        if (res && res.result) {
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
          
        var ctx2 = document.getElementById('secondContainer').getContext('2d');
        new Chart(ctx2, options2);
        this.setState({
            myChart: ctx2            
        });
    }
    componentDidMount() {
        if (!this.props.address) this.props.history.push('/');
        this.initilize(this.props.address);
    }
    render() {
        return (
            <div className="Dashboard">
                <div className="content">
                    <div className="chart-block">
                        <div className="outer">
                            <canvas id="chartJSContainer" width="600" height="400"></canvas>
                            <canvas id="secondContainer" width="600" height="400"></canvas>
                            <p className="percent">
                                {this.state.rating === -1?'Loading...':Number.parseFloat(this.state.rating).toFixed(2)}
                            </p>
                            <div className="credit__text">
                                Your Credit Score
                            </div>
                        </div>
                        <div className="detail">
                            <div className="detail__row">
                                <div className="text">ETH balance: </div>
                                <div className="value">{this.state.ethBalance}</div>
                            </div>
                            <div className="detail__row">
                                <div className="text">Total tx Count: </div>
                                <div className="value">{this.state.txCount}</div>
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