import React from 'react';
import './app.css';
import { HomePage, CartPage } from '../pages'
import ShopHeader from '../shop-header';
import ShoppingCartTable from '../shopping-cart-table';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
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
            <ShoppingCartTable />
        </main>
    );
};

export default App;
