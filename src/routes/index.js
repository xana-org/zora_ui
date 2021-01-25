import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header       from '../components/Header';
import Footer       from '../components/Footer';
import LoginModal   from '../components/LoginModal';
import HomePage     from './HomePage';
import Dashboard    from './Dashboard';
import store from '../store';

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <LoginModal/>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route render={() => <Redirect to="/"/>}/>
                    </Switch>
                    <Footer/>
                </Router>
            </Provider>
        )
    }
}

export default Routes;