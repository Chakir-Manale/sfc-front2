import React, {useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import LoadingOverlay from '../components/features/loading-overlay';

import {scrollTop} from '../utils';
import {getAllCategories} from '../actions/categoryActions';
import {loginUser} from '../actions/userActions';
import {getAllVariants} from '../actions/variantActions';
import {getAllProducts} from '../actions/productActions';
import {getCartList} from '../actions/cartlistActions';
import {getArticles} from '../actions/blogActions';

import {connect} from "react-redux";
// import Layout from "../components/app";

const ElementPages = React.lazy(() => import( './elements-route.js' ));
const ProductPages = React.lazy(() => import( './products-route.js' ));
const ShopPages = React.lazy(() => import( './shop-route.js' ));
const BlogPages = React.lazy(() => import( './blogs-route.js' ));
const OtherPages = React.lazy(() => import( './others-route.js' ));
const HomePage = React.lazy(() => import( './home-route.js' ));

function AppRoot(props) {

    useEffect(() => {
        scrollTop();
        props.getArticles();
    }, [])

    return (
        <React.Suspense fallback={<LoadingOverlay/>}>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/elements`} component={ElementPages}/>
                <Route path={`${process.env.PUBLIC_URL}/product`} component={ProductPages}/>
                <Route path={`${process.env.PUBLIC_URL}/shop`} component={ShopPages}/>
                <Route path={`${process.env.PUBLIC_URL}/blog`} component={BlogPages}/>
                <Route path={`${process.env.PUBLIC_URL}/pages`} component={OtherPages}/>
                <Route path={`${process.env.PUBLIC_URL}/`} component={HomePage}/>
            </Switch>
        </React.Suspense>
    )
}

export const mapStateToProps = (state, props) => {
    console.log("routes/index: ", state);
    return {
        user: state.user.user ? state.user.user : {},
        isLogged: state.user.isLogged ? state.user.isLogged : false,
        articles: state.blog.articles ? state.blog.articles : [],
    }
}

export default withRouter(connect(mapStateToProps, {
    getArticles,
    loginUser,
    getCartList
})(AppRoot));