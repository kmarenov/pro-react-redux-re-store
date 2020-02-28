import React from 'react';
import './app.css';
import { HomePage, CartPage } from '../pages'
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact />
            <Route
                path="/cart"
                component={CartPage}
                />
        </Switch>
    );
};

export default App;
