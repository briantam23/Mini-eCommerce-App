import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadInitialProducts } from '../store/actions/products';
import { loadInitialOrders } from '../store/actions/orders';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Cart from './Cart';
import Orders from './Orders';


class App extends Component {

    state = { loading: true };

    componentDidMount = () => {
        const { loadInitialProducts, loadInitialOrders } = this.props;
        loadInitialProducts()
            .then(() => loadInitialOrders())
            .then(() => this.setState({ loading: false }))
    }

    render() {
        const { loading } = this.state;
        if(loading) return <h1>Loading...</h1>
        return(
            <Fragment>
                <Router>
                    <Fragment>
                        <NavBar/>
                        <Route exact path='/' render={ () => <Home/> }/>
                        <Route path='/cart' render={ ({ history }) => <Cart history={ history }/> }/>
                        <Route path='/orders' render={ () => <Orders/> }/>
                    </Fragment>
                </Router>
            </Fragment>
        )
    }
}

const mapDispatchToProps = { loadInitialProducts, loadInitialOrders };

export default connect(null, mapDispatchToProps)(App);