import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Cart from './Cart';


class App extends Component {
    render() {
        return(
            <Fragment>
                <Router>
                    <Fragment>
                        <NavBar/>
                        <Route path='/cart' render={ () => <Cart/> }/>
                    </Fragment>
                </Router>
            </Fragment>
        )
    }
}


export default App;