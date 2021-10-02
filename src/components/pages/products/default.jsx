import React, {useEffect} from 'react';
import imagesLoaded from 'imagesloaded';
import {Helmet} from 'react-helmet';

import MediaOne from './partials/media/media-one';
import ProductDetailOne from './partials/details/detail-one';
import DescOne from './partials/description/desc-one';
// import RelatedProducts from './partials/related-products';
// import StickyBar from './partials/sticky-bar';

// import Breadcrumb from '../../common/breadcrumb';
// import QuickView from '../../features/product/common/quickview';

import {productGallery} from '../../../utils';
import RelatedProducts from "./partials/related-products";
// import {Link} from "react-router-dom";
// import {T} from "../../common/partials/trans";

function SingleProduct(props) {
    let productId = props.match.params.id;

    useEffect(() => {
        productGallery();

        document.querySelector('.skel-pro-single').classList.remove('loaded');

        let imgLoad = imagesLoaded(".product-main-image", {background: true});

        imgLoad.on('done', function (instance, image) {
            document.querySelector('.skel-pro-single').classList.add('loaded');
        });
    }, [productId])
    return (
        <>
            <Helmet>
                <title>Flow</title>
            </Helmet>

            <h1 className="d-none">Flow</h1>
            <div className="main">
                {/*<Breadcrumb*/}
                {/*    title="Default"*/}
                {/*    type="product"*/}
                {/*    slug="default"*/}
                {/*    adClass="breadcrumb-nav border-0 mb-0"*/}
                {/*    productId={ productId }*/}
                {/*    parent1={ [ "Products", "product" ] }*/}
                {/*/>*/}

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top skeleton-body">
                            <div className="row skel-pro-single">
                                <div className="col-md-6">
                                    <div className="skel-product-gallery">
                                    </div>

                                    <MediaOne id={productId}/>
                                </div>

                                <div className="col-md-6">
                                    <div className="entry-summary row">
                                        <div className="col-md-12">
                                            <div className="entry-summary1"></div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="entry-summary2"></div>
                                        </div>
                                    </div>

                                    <ProductDetailOne id={productId}/>
                                </div>
                            </div>
                        </div>

                        <DescOne id={productId}/>

                        <h2 className="title text-center mb-4">You May Also Like</h2>

                        <RelatedProducts/>

                        {/*<h2 className="title text-center mb-4">*/}
                        {/*    <T id={'REVIEWS'}/>*/}
                        {/*</h2>*/}

                        {/*<div className="reviews">*/}
                        {/*    <h3>Reviews (2)</h3>*/}
                        {/*    <div className="review">*/}
                        {/*        <div className="row no-gutters" style={isIEBrowser() ? {flexDirection: 'row'} : {}}>*/}
                        {/*            <div className="col-auto">*/}
                        {/*                <h4><Link to="#">Samanta J.</Link></h4>*/}

                        {/*                <div className="ratings-container">*/}
                        {/*                    <div className="ratings">*/}
                        {/*                        <div className="ratings-val" style={{width: "80%"}}></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <span className="review-date">6 days ago</span>*/}
                        {/*            </div>*/}
                        {/*            <div className="col">*/}
                        {/*                <h4>Good, perfect size</h4>*/}

                        {/*                <div className="review-content">*/}
                        {/*                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum*/}
                        {/*                        dolores assumenda asperiores facilis porro reprehenderit animi culpa*/}
                        {/*                        atque blanditiis commodi perspiciatis doloremque, possimus, explicabo,*/}
                        {/*                        autem fugit beatae quae voluptas!</p>*/}
                        {/*                </div>*/}

                        {/*                <div className="review-action">*/}
                        {/*                    <Link to="#"><i className="icon-thumbs-up"></i>Helpful (2)</Link>*/}
                        {/*                    <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="review">*/}
                        {/*        <div className="row no-gutters" style={isIEBrowser() ? {flexDirection: 'row'} : {}}>*/}
                        {/*            <div className="col-auto">*/}
                        {/*                <h4><Link to="#">John Doe</Link></h4>*/}

                        {/*                <div className="ratings-container">*/}
                        {/*                    <div className="ratings">*/}
                        {/*                        <div className="ratings-val" style={{width: "100%"}}></div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <span className="review-date">5 days ago</span>*/}
                        {/*            </div>*/}

                        {/*            <div className="col">*/}
                        {/*                <h4>Very good</h4>*/}

                        {/*                <div className="review-content">*/}
                        {/*                    <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis*/}
                        {/*                        laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi,*/}
                        {/*                        quas iure illum repellendus, blanditiis perspiciatis beatae!</p>*/}
                        {/*                </div>*/}

                        {/*                <div className="review-action">*/}
                        {/*                    <Link to="#"><i className="icon-thumbs-up"/>Helpful (0)</Link>*/}
                        {/*                    <Link to="#"><i className="icon-thumbs-down"/>Unhelpful (0)</Link>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>

                {/*<StickyBar id={ productId } />*/}

                {/*<QuickView />*/}
            </div>
        </>
    )
}

export default SingleProduct;