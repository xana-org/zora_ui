import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './index.scss';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        if (!this.props.address) this.props.history.push('/');
    }
    render() {
        return (
            <div className="Dashboard">

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