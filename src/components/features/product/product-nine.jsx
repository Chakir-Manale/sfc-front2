import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
// import Countdown from 'react-countdown';
import {findIndex} from '../../../utils';
// import {rendererOne} from '../count-down';
import {addToWishlist, removeFromWishlist} from "../../../actions/wishlistActions";
import {addVariantToCartlist} from "../../../actions/cartlistActions";
import {T} from "../../common/partials/trans";

function ProductNine(props) {
    const {product, isWishlist, onAddToCart, onToggleWishlist, showQuickView, onAddToCompare} = props;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        // if (0 !== product.stock)
        //     onAddToCart(product, 1);
        dispatch(addVariantToCartlist(product.id, 1, false));
    }

    // const wishlistHandler = () => {
    //     // if (isWishlist) {
    //     //     window.location = process.env.PUBLIC_URL + '/shop/wishlist';
    //     // } else {
    //     //     onToggleWishlist(product, isWishlist);
    //     // }
    //     dispatch(addToWishlist(product.id));
    // }

    // const quickViewHandler = () => {
    //     showQuickView(product.id);
    // }

    const addToCompareHandler = () => {
        onAddToCompare(product);
    }

    return (
        product ?
            <div className="product product-4">
                <figure className="product-media">
                    {
                        (product.images && product.images.length > 0) ?
                            <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>
                                <LazyLoadImage
                                    alt="product"
                                    visibleByDefault={true}
                                    src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/${product.images[0].fileName}`}
                                    threshold={100}
                                />

                                {
                                    product.images[1] &&
                                    <LazyLoadImage
                                        alt="product"
                                        visibleByDefault={true}
                                        src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/${product.images[1].fileName}`}
                                        threshold={100}
                                        wrapperClassName="product-image-hover product-image"
                                    />
                                }
                            </Link>
                            :
                            <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>
                                <LazyLoadImage
                                    alt="product"
                                    visibleByDefault={true}
                                    src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/${product._fileName}`}
                                    threshold={100}
                                />

                            </Link>

                    }

                    <div className="product-action-vertical">
                        {
                            isWishlist ?
                                <button
                                    className={`btn-product-icon btn-wishlist btn-expandable ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}`}
                                    onClick={(e) => dispatch(removeFromWishlist(product.id, 1, false))}
                                    title="Supprimer des favoris">
                                    {/*<span>*/}
                                    {/*    <T id={"FAVORITES.REMOVE"}/>*/}
                                    {/*</span>*/}
                                </button>
                                :
                                <button
                                    className={`btn-product-icon btn-wishlist btn-expandable ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}`}
                                    title="Ajouter au favoris"
                                    onClick={(e) => dispatch(addToWishlist(product.id, 1, false))}
                                >
                                    {/*<span>*/}
                                    {/*   <T id={"FAVORITES.ADD"}/>*/}
                                    {/*</span>*/}
                                </button>
                        }
                    </div>

                    <div className="product-action">
                        <button className="btn-product btn-cart" title="add to cart" onClick={addToCartHandler}>
                            <span> <T id={"CART.ADD"}/></span>
                        </button>
                    </div>

                </figure>

                <div className="product-body">
                    <h3 className="product-title text-truncate">
                        <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>
                            {product.nameFr}
                        </Link>
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

function mapStateToProps(state, ownprops) {
    return {
        isWishlist: (findIndex(state.userwishlist.wishlist, item => item.id === ownprops.product.id) !== -1)
    };
}

export default connect(mapStateToProps)(ProductNine);