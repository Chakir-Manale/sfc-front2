import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import HomePage from '../components/home';
import CMIOk from "../components/pages/shop/cmi_ok";
import CMIFail from "../components/pages/shop/cmi_fail";

export default function HomeRoute() {
    return (
        <Switch>
            <Layout>

                <Route exact path={`${process.env.PUBLIC_URL}/payments/cmi/ok`} component={CMIOk}/>
                <Route exact path={`${process.env.PUBLIC_URL}/payments/cmi/fail`} component={CMIFail}/>
                <Route exact path={ `${process.env.PUBLIC_URL}/` } component={ HomePage } />
            </Layout>
        </Switch>
    );
}