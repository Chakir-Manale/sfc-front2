import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import {findIndex} from '../../../utils';

import {addVariantToCartlist} from '../../../actions/cartlistActions';
import {addToWishlist, removeFromWishlist} from '../../../actions/wishlistActions';
import {T} from "../../common/partials/trans";

function ProductTwo(props) {
    const {product, onAddToCart, showQuickView, isWishlist, onToggleWishlist} = props;
    const dispatch = useDispatch();

    // const addToCartHandler = () => {
    //     if (0 !== product.stock)
    //         onAddToCart(product, 1);
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

    return (
        product ?
            <div className="product">
                <figure className="product-media">
                    {/*{product.new ? <span className="product-label label-new">New</span> : ''}*/}
                    {/*{product.top ? <span className="product-label label-top">Top</span> : ''}*/}
                    {/*{product.discount ? <span className="product-label label-sale">{product.discount}% off</span> : ''}*/}
                    {/*{0 === product.stock ? <span className="product-label label-out">Out Of Stock</span> : ''}*/}

                    {
                        product.images.length > 0 ?
                            <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>
                                <LazyLoadImage
                                    alt="product"
                                    src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + product.images[0].fileName}
                                    threshold={400}
                                />

                                {
                                    product.images[1] ?
                                        <LazyLoadImage
                                            alt="product"
                                            src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + product.images[1].fileName}
                                            wrapperClassName="product-image-hover product-image"
                                            threshold={400}
                                        />
                                        : ''
                                }
                            </Link>
                            :
                            <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>
                                <LazyLoadImage
                                    alt="product"
                                    src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + product._fileName}
                                    threshold={400}
                                />
                            </Link>
                    }

                    <div className="product-action action-icon-top">
                        <button className="btn-product btn-cart"
                                onClick={(e) => dispatch(addVariantToCartlist(product.id, 1, false))}>
                            <span>
                                <T id={"CART.ADD"}/>
                            </span>
                        </button>

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
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    {/*<button*/}
                    {/*    className={`btn-product btn-wishlist ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}`}*/}
                    {/*    onClick={wishlistHandler}*/}
                    {/*    title={isWishlist ? "Go to wishlist" : "Add to wishlist"}*/}
                    {/*>*/}
                    {/*    <span>{isWishlist ? "go to wishlist" : "add to wishlist"}</span>*/}
                    {/*</button>*/}

                    {/*<div className="product-cat">*/}
                    {/*    <span className="mr-0">*/}
                    {/*        <Link to="#">{product.category[0]}</Link>*/}
                    {/*    </span>*/}
                    {/*</div>*/}

                    <h3 className="product-title">
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

                    <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val" style={{width: product._rating * 20 + '%'}}/>
                        </div>
                        {/*<span className="ratings-text">({product.reviews} Reviews )</span>*/}
                    </div>

                    {/*{*/}
                    {/*    product.variants ?*/}
                    {/*        product.variants[0].model ?*/}
                    {/*            <div className="product-nav product-nav-thumbs">*/}
                    {/*                {product.variants.map((vari, i) =>*/}
                    {/*                    <Link to="#" key={i} className={0 === i ? 'active' : ''}>*/}
                    {/*                        <img src={process.env.PUBLIC_URL + '/' + vari.model} alt="product desc"/>*/}
                    {/*                    </Link>*/}
                    {/*                )}*/}
                    {/*            </div>*/}
                    {/*            :*/}
                    {/*            <div className="product-nav product-nav-dots">*/}
                    {/*                {product.variants.map((vari, i) =>*/}
                    {/*                    <Link to="#" key={i} className={0 === i ? 'active' : ''}*/}
                    {/*                          style={{background: vari.color}}>*/}
                    {/*                    </Link>*/}
                    {/*                )}*/}
                    {/*            </div>*/}
                    {/*        : ''*/}
                    {/*}*/}
                </div>
            </div> : ''
    );
}

export const mapStateToProps = (state, ownprops) => {
    return {
        isWishlist: (findIndex(state.userwishlist.wishlist, item => item.id === ownprops.product.id) !== -1)
    };
}

export default connect(mapStateToProps, {addVariantToCartlist, addToWishlist})(ProductTwo);
