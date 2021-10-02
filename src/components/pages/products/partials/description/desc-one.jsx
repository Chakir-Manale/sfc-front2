import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import {isIEBrowser} from '../../../../../utils';
import {T} from "../../../../common/partials/trans";
import {getVariantDetail} from "../../../../../actions/variantActions";
import LandingOverlay from "../../../../features/loading-overlay";

const tabs = [
    {
        id: 'PRODUCT.INFO.DESCRIPTION',
    },
    {
        id: 'PRODUCT.INFO.REVIEWS',
    }
    // {
    //     id: 'PRODUCT.INFO.INGREDIENTS',
    // },
    // {
    //     id: 'PRODUCT.INFO.QUALITY',
    // },
    // {
    //     id: 'PRODUCT.INFO.USE',
    // }
]

function DescOne(props) {
    // const { product } = props;
    let currentProduct = props.currentProduct;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVariantDetail(props.id));
    }, [props.id])

    if (!currentProduct.id) {
        return <LandingOverlay/>
    }
    return (
        <Tabs selectedTabClassName="show" selectedTabPanelClassName="active show">
            <div className="product-details-tab">
                <TabList className="nav nav-pills justify-content-center">
                    {
                        tabs.map(tab => {

                            return (
                                <Tab key={tab.id} className="nav-item">
                                    <span className="nav-link">
                                        <T id={tab.id}/>
                                    </span>
                                </Tab>
                            )
                        })
                    }

                    {/*<Tab className="nav-item">*/}
                    {/*    <span className="nav-link" >Reviews ({ product.reviews })</span>*/}
                    {/*</Tab>*/}
                </TabList>

                <div className="tab-content">

                    {/*{*/}
                    {/*    tabs.map(tab => {*/}

                    {/*        return (*/}
                    {/*            <TabPanel key={tab.id} className="tab-pane">*/}
                    {/*                <div className="product-desc-content">*/}
                    {/*                    <T id={tab.id}/>*/}
                    {/*                </div>*/}
                    {/*            </TabPanel>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}


                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <h3>Description</h3>
                            <p>
                                {currentProduct.descFr}
                            </p>
                        </div>
                    </TabPanel>

                    {/*<TabPanel className="tab-pane">*/}
                    {/*    <div className="product-desc-content">*/}
                    {/*        <h3>Delivery & returns</h3>*/}
                    {/*        <p>We deliver to over 100 countries around the world. For full details of the delivery*/}
                    {/*            options we offer, please view our <Link to="#">Delivery information</Link><br/>*/}
                    {/*            We hope you’ll love every purchase, but if you ever need to return an item you can do so*/}
                    {/*            within a month of receipt. For full details of how to make a return, please view*/}
                    {/*            our <Link to="#">Returns information</Link></p>*/}
                    {/*    </div>*/}
                    {/*</TabPanel>*/}
                    {
                        currentProduct.reviews &&
                        currentProduct.reviews.length > 0 ?
                            <TabPanel className="tab-pane">
                                <div className="reviews">
                                    <h3>Reviews ({currentProduct.reviews.length})</h3>
                                    <div className="review">
                                        {
                                            currentProduct.reviews &&
                                            currentProduct.reviews.map((review, index) => {
                                                return (
                                                    <div key={index} className="row no-gutters"
                                                         style={isIEBrowser() ? {flexDirection: 'row'} : {}}>
                                                        <div className="col-auto">
                                                            <h4>
                                                                <Link to="#">
                                                                    {`${review.user.firstName} ${review.user.lastName}`}
                                                                </Link>
                                                            </h4>

                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val"
                                                                         style={{width: review.rating * 20 + "%"}}></div>
                                                                </div>
                                                            </div>
                                                            {/*<span className="review-date">6 days ago</span>*/}
                                                        </div>
                                                        <div className="col">
                                                            <h4>Good, perfect size</h4>

                                                            <div className="review-content">
                                                                <p>
                                                                    {review.comment}
                                                                </p>
                                                            </div>
                                                            {/*<div className="review-action">*/}
                                                            {/*    <Link to="#"><i className="icon-thumbs-up"></i>Helpful*/}
                                                            {/*        (2)</Link>*/}
                                                            {/*    <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful*/}
                                                            {/*        (0)</Link>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            :
                            <TabPanel className="tab-pane">
                                <div className="reviews">
                                    <h3>Pas de reviews.</h3>
                                </div>
                            </TabPanel>
                    }
                </div>
            </div>
        </Tabs>
    );
}

function mapStateToProps(state, props) {
    return {
        currentProduct: state.variants.variantDetail ? state.variants.variantDetail : {},
        // product: state.data.products.filter( product => product.id === parseInt( props.id ) )[ 0 ]
    }
}

export default connect(mapStateToProps)(DescOne);