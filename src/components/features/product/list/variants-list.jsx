import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import ProductEight from '../product-two';
// import QuickView from '../common/quickview';

import {addToCart} from '../../../../actions';
// import {getVisibleProducts} from '../../../../services';

function AllVariantsList(props) {

    let {type, filters} = props;

    let variants = props.variants, timer;

    const [loadedCount, setLoadedCount] = useState(12);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const classList = {
        "boxed": "col-6 col-md-4 col-lg-4 col-xl-3",
        "fullwidth": "col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2"
    };

    // function showSideBar() {
    //     document.querySelector('body').classList.add('sidebar-filter-active');
    // }

    // function changeFilter(e) {
    //     props.filterSort(e.target.value);
    // }

    function loadMore() {
        // fake async api. products should be fetched from backend
        if (loadedCount < variants.length) {
            setLoading(true);

            timer = setTimeout(() => {
                setLoadedCount(prevCount => prevCount + 4);
                setLoading(false);

                if (loadedCount >= variants.length - 4) {
                    setHasMore(false);
                }
            }, 2000);
        } else {
            timer = setTimeout(() => {
                setHasMore(false);
            }, 500);
        }
    }

    useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer);
        }
    }, [])

    useEffect(() => {
        // variants = getVisibleProducts(props.variants.slice(0, 10), filters);

        if (variants.length > 12) {
            setHasMore(true);
        } else {
            setHasMore(false);
        }
    }, [filters])


    return (
        variants.length > 0 ?
            <>
                <div className="toolbox">

                    {/*<div className="toolbox-left">
                        <button className="sidebar-toggler" onClick={ showSideBar } style={ { padding: "0" } }><i className="icon-bars"></i>Filters</button>
                    </div>*/}

                    <div className="toolbox-center">
                        <div className="toolbox-info">
                            Showing <span>{Math.min(loadedCount, variants.length)} of {variants.length}</span> Products
                        </div>
                    </div>

                    {/*<div className="toolbox-right">*/}
                    {/*    <div className="toolbox-sort">*/}
                    {/*        <label htmlFor="sortby">Sort by:</label>*/}
                    {/*        <div className="select-custom">*/}
                    {/*            <select name="sortby" id="sortby" defaultValue={filters.sortBy} className="form-control"*/}
                    {/*                    onChange={changeFilter}>*/}
                    {/*                <option value="popularity">Most Popular</option>*/}
                    {/*                <option value="rating">Most Rated</option>*/}
                    {/*                <option value="date">Date</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                <div className="products mb-3">
                    <div className="row">
                        {variants.slice(0, loadedCount).map((item, index) =>
                            <div className={classList[type]} key={item.id}>
                                <ProductEight
                                    product={item}
                                    onAddToCart={addToCart}/>
                            </div>
                        )}
                    </div>

                    {/*<QuickView/>*/}
                </div>

                <div className="load-more-container text-center">
                    {
                        loadedCount < variants.length ?
                            <button className="btn btn-outline-darker btn-load-more" onClick={loadMore}><span>Plus de produits </span>
                                {loading ?
                                    <i className="icon-refresh load-more-rotating"/> :
                                    <i className="icon-refresh"/>
                                }
                            </button>
                            : ''
                    }
                </div>
            </>
            :
            <div className="container" style={{textAlign: 'center', marginBottom: '5%', marginTop: '5%'}}>
                <span
                    style={{fontSize: '15px', fontWeight: 'bold'}}>Il n'y a pas de produits dans cette catégorie.</span>
            </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        variants: state.variants.variants ? state.variants.variants : [],
        filters: state.filters
    }
}

export default connect(mapStateToProps, {addToCart})(AllVariantsList);