import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';

import {connect, useDispatch} from 'react-redux';

// import Custom Components
import SideBar from '../../features/sidebar/shop-filter';
import ProductListByCategory from '../../features/product/list/product-list-bycategory';
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import {
    getAllVariantsWithFilters,
    getVariantsByCategory,
    getVariantsByCategoryWithSlug
} from '../../../actions/variantActions';

function FilteredVariants(props) {

    const type = "boxed";
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

    console.log("filtered", variants)

    // useEffect(() => {
    //     dispatch(getAllVariantsWithFilters(id));
    // }, [id])

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
                        <ProductListByCategory type={type}/>

                        <div className="sidebar-filter-overlay" onClick={hideSideBar}/>

                        <SideBar numbers={50}/>
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

export default connect(mapStateToProps, getVariantsByCategoryWithSlug)(React.memo(FilteredVariants));