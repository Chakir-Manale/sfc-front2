import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Countdown from 'react-countdown';

import {rendererOne} from '../count-down';

import {findIndex} from '../../../utils';
import {T} from "../../common/partials/trans";
import {addToWishlist, removeFromWishlist} from "../../../actions/wishlistActions";
import {addVariantToCartlist} from "../../../actions/cartlistActions";

function ProductSix(props) {
    const {product, type = "product", isWishlist} = props;
    const dispatch = useDispatch();
    // const addToCartHandler = () => {
    //     if (0 !== product.stock)
    //         onAddToCart(product, 1);
    // }

    // const addToCompareHandler = () => {
    //     onAddToCompare(product);
    // }

    // const quickViewHandler = () => {
    //     showQuickView( product.id );
    // }

    // const wishlistHandler = () => {
    //     if (isWishlist) {
    //         window.location = process.env.PUBLIC_URL + '/shop/wishlist';
    //     } else {
    //         onToggleWishlist(product, isWishlist);
    //     }
    // }

    function toTop() {
        window.scroll({
            top: 0
        })
    }

    return (
        product ?
            <div className={`product product-5 text-center ${0 === product.stock ? 'product-disabled' : ''}`}>
                <figure className="product-media">
                    {/*{ product.new ? <span className="product-label label-new">New</span> : '' }*/}
                    {/*{ product.top ? <span className="product-label label-top">Top</span> : '' }*/}
                    {/*{ product.discount ? <span className="product-label label-sale">Sale</span> : '' }*/}
                    {/*{ ( 0 === product.stock ) ? <span className="product-label label-out">Out Of Stock</span> : '' }*/}

                    {
                        product.images.length > 0 ?
                            <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`} onClick={toTop}>
                                <img
                                    alt="product"
                                    src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + product.images[0].fileName}
                                />

                                {
                                    product.images[1] &&
                                    <span className="product-image-hover product-image">
                                        <img
                                            alt="product"
                                            src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + product.images[1].fileName}
                                        />
                                    </span>
                                }
                            </Link>
                            :
                            <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`} onClick={toTop}>
                                <img
                                    alt="product"
                                    src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + product._fileName}
                                />
                            </Link>

                    }

                    {
                        type !== "sidebar" && 0 < product._discountRate ?
                            <div className="product-countdown countdown-primary">
                                <Countdown date={`2021-02-01T01:02:03`} renderer={rendererOne}/>
                            </div>
                            : ''
                    }

                    <div className="product-action-vertical">
                        {
                            isWishlist ?
                                <button className="btn-product btn-wishlist" title="Ajouter au favoris"
                                        onClick={(e) => dispatch(removeFromWishlist(product.id, 1, false))}>
                                    <span>
                                        <T id={"FAVORITES.REMOVE"}/>
                                    </span>
                                </button>
                                :
                                <button className="btn-product btn-wishlist" title="Ajouter au favoris"
                                        onClick={(e) => dispatch(addToWishlist(product.id, 1, false))}>
                                    <span>
                                       <T id={"FAVORITES.ADD"}/>
                                    </span>
                                </button>
                        }

                        {/*<button*/}
                        {/*    className={`btn-product-icon btn-wishlist ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}`}*/}
                        {/*    // onClick={wishlistHandler}*/}
                        {/*    title={isWishlist ? "Go to wishlist" : "Add to wishlist"}*/}
                        {/*>*/}
                        {/*    <span>{isWishlist ? "go to wishlist" : "add to wishlist"}</span>*/}
                        {/*</button>*/}

                        {/*<button className="btn-product-icon btn-quickview" title="Quick view" onClick={ quickViewHandler }>*/}
                        {/*    <span>Quick view</span>*/}
                        {/*</button>*/}

                        {/*<button className="btn-product-icon btn-compare" title="Compare"*/}
                        {/*    // onClick={addToCompareHandler}*/}
                        {/*>*/}
                        {/*    <span>Compare</span>*/}
                        {/*</button>*/}
                    </div>

                    <div className="product-action">
                        <button className="btn-product btn-cart"
                                onClick={(e) => dispatch(addVariantToCartlist(product.id, 1, false))}>
                            <span>
                                <T id={"CART.ADD"}/>
                            </span>
                        </button>
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    <h3 className="product-title text-truncate">
                        <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>{product.nameFr}</Link>
                    </h3>
                    {
                        0 === product.qty ?
                            <div className="product-price">
                                <span className="out-price">{product._sellingPrice} MAD</span>
                            </div> :

                            0 < product._discountRate ?
                                <div className="product-price">
                                    <span className="new-price">{product._sellingPrice} MAD</span>
                                    <span className="old-price">{product.price} MAD</span>
                                </div> :
                                <div className="product-price">{product.price} MAD</div>
                    }
                </div>
            </div> : ''
    );
}

export const mapStateToProps = (state, ownprops) => {
    return {
        isWishlist: (findIndex(state.userwishlist.wishlist, item => item.id === ownprops.product.id) !== -1)
    };
}

export default connect(mapStateToProps)(ProductSix);