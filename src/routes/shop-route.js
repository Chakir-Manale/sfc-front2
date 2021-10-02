import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from '../components/app';
// import Sidebar from '../components/pages/shop/sidebar';
// import NoSidebar from '../components/pages/shop/nosidebar';
import ProductCategory from '../components/pages/shop/product-category';
// import MyAccount from '../components/pages/shop/dashboard';
import Wishlist from '../components/pages/shop/wishlist';
import Cart from '../components/pages/shop/cart';
import Checkout from '../components/pages/shop/checkout';
// import Market from '../components/pages/shop/market';
import VariantsByCategory from "../components/pages/shop/bycategory";
import FilteredVariants from "../components/pages/shop/filteredVariants";
import VariantsList from "../components/pages/shop/variantsList";

export default function ShopRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={`${process.env.PUBLIC_URL}/shop/category/:grid`} component={ProductCategory}/>
                {/*<Route exact path={`${process.env.PUBLIC_URL}/shop/sidebar/:grid`} component={Sidebar}/>*/}
                <Route exact path={`${process.env.PUBLIC_URL}/shop/bycategory/:id`}
                       component={VariantsByCategory}/>
                <Route exact path={`${process.env.PUBLIC_URL}/shop/filtered`}
                       component={FilteredVariants}/>
                {/*<Route exact path={`${process.env.PUBLIC_URL}/shop/nosidebar/:grid`} component={NoSidebar}/>*/}
                {/*<Route exact path={`${process.env.PUBLIC_URL}/shop/market`} component={Market}/>*/}
                {/*<Route exact path={`${process.env.PUBLIC_URL}/shop/dashboard`} component={MyAccount}/>*/}
                <Route exact path={`${process.env.PUBLIC_URL}/shop/wishlist`} component={Wishlist}/>
                <Route exact path={`${process.env.PUBLIC_URL}/shop/cart`} component={Cart}/>
                <Route exact path={`${process.env.PUBLIC_URL}/shop/checkout`} component={Checkout}/>
                <Route exact path={`${process.env.PUBLIC_URL}/shop/`} component={VariantsList}/>
            </Layout>
        </Switch>
    );
}