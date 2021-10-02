import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';

import {connect, useDispatch} from 'react-redux';

// import Custom Components
// import SideBar from '../../features/sidebar/shop-filter';
import ProductListByCategory from '../../features/product/list/product-list-bycategory';
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import {getVariantsByCategory} from '../../../actions/variantActions';

function VariantsByCategory(props) {

    const type = "boxed";
    const id = props.match.params.id;
    const title = {"boxed": "Les produits du Catégorie", "fullwidth": "Les produits du Catégorie"}

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
        dispatch(getVariantsByCategory(id));
    }, [id])

    if (!variants) {
        return "Chargement des produits..."
    }

    return (
        <>
            <Helmet>
                <title>Les produits du Catégorie</title>
            </Helmet>

            <h1 className="d-none">Les produits du Catégorie</h1>

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
                        <ProductListByCategory type={type}/>

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
        variants: state.variants.variantsByCategory ? state.variants.variantsByCategory : [],
    }
}

export default connect(mapStateToProps, getVariantsByCategory)(React.memo(VariantsByCategory));