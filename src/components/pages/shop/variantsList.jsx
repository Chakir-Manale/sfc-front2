import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';

import {connect, useDispatch} from 'react-redux';

// import Custom Components
// import SideBar from '../../features/sidebar/shop-filter';
// import ProductListByCategory from '../../features/product/list/product-list-bycategory';
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import {getAllVariants} from '../../../actions/variantActions';
import AllVariantsList from "../../features/product/list/variants-list";

function VariantsList(props) {

    const type = "boxed";
    const id = props.match.params.id;
    const title = {"boxed": "Nos produits", "fullwidth": "Nos produits"}

    let variants = props.variants;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (type !== "boxed" && type !== "fullwidth") {
            window.location = process.env.PUBLIC_URL + "/pages/404";
        }
    }, [type])

    function hideSideBar() {
        if (document.querySelector('body').classList.contains('sidebar-filter-active'))
            document.querySelector('body').classList.remove('sidebar-filter-active');
    }

    useEffect(() => {
        dispatch(getAllVariants());
    }, [id])

    if (!variants) {
        return "Chargement des produits..."
    }

    return (
        <>
            <Helmet>
                <title>Flow</title>
            </Helmet>

            <h1 className="d-none">Nos produits</h1>

            <div className="main">

                <PageHeader title={title[type]} subTitle=""/>

                <Breadcrumb
                    title={title[type]}
                    parent1={["Boutique", "shop/nosidebar"]}
                    adClass="mb-2"
                    container={type === "boxed" ? "container" : "container-fluid"}
                />

                <div className="page-content">
                    <div className={type === 'boxed' ? 'container' : 'container-fluid'}>
                        <AllVariantsList type={type}/>

                        <div className="sidebar-filter-overlay" onClick={hideSideBar}/>

                        {/*<SideBar numbers={50}/>*/}
                    </div>
                </div>
            </div>
        </>
    )
}


function mapStateToProps(state) {
    return {
        variants: state.variants.variants ? state.variants.variants : [],
    }
}

export default connect(mapStateToProps)(React.memo(VariantsList));