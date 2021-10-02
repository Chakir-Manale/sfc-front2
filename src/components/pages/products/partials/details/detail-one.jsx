import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
// import {Link} from 'react-router-dom';

import {addToCart, toggleWishlist} from '../../../../../actions';

import {quantityInputs, isIEBrowser, isEdgeBrowser, findIndex} from '../../../../../utils';
import {getVariantDetail} from "../../../../../actions/variantActions";
import {addVariantToCartlist} from "../../../../../actions/cartlistActions";
import {addToWishlist, removeFromWishlist} from "../../../../../actions/wishlistActions";
import {T} from "../../../../common/partials/trans";

function ProductDetailOne(props) {
    const {product, isWishlist, type, addToCart, toggleWishlist} = props;

    let productId = props.id;
    let currentProduct = props.currentProduct;

    const dispatch = useDispatch();

    useEffect(() => {
        // quantityInputs();
        dispatch(getVariantDetail(productId));
    }, [productId])

    const addToCartHandler = () => {
        if (productId != null)
            dispatch(addVariantToCartlist(productId, document.querySelector("#qty").value, true));
    }

    const wishlistHandler = () => {
        if (productId) {
            if (isWishlist) {
                dispatch(removeFromWishlist(productId));
            } else {
                dispatch(addToWishlist(productId));
            }
        }
    }

    if (!currentProduct.id) {
        return ""
    }
    return (
        currentProduct ?

            <div className={"product-details"}>
                <h1 className="product-title">{currentProduct.nameFr}</h1>

                <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val" style={{width: currentProduct._rating * 20 + '%'}}></div>
                    </div>
                    {/*<Link className="ratings-text" to="#product-review-link"*/}
                    {/*      id="review-link">*/}
                    {/*    /!*( {currentProduct.reviews}*!/*/}
                    {/*    Reviews</Link>*/}
                </div>

                <div className="product-content">
                    <p>{currentProduct.descFr}</p>
                </div>

                {
                    0 === currentProduct.qty ?
                        <div className="product-price">
                            <span className="out-price">{currentProduct._sellingPrice} MAD</span>
                        </div> :

                        0 < currentProduct._discountRate ?
                            <div className="product-price">
                                <span className="new-price">{currentProduct._sellingPrice} MAD</span>
                                <span className="old-price">{currentProduct.price} MAD</span>
                            </div>
                            :
                            <div className="product-price">{currentProduct.price} MAD</div>
                }

                {/*<div className="details-filter-row details-row-size">*/}
                {/*    <label htmlFor="size">Size:</label>*/}
                {/*    <div className="select-custom">*/}
                {/*        <select name="size" id="size" className="form-control" defaultValue="#">*/}
                {/*            <option value="#">Select a size</option>*/}
                {/*            <option value="s">Small</option>*/}
                {/*            <option value="m">Medium</option>*/}
                {/*            <option value="l">Large</option>*/}
                {/*            <option value="xl">Extra Large</option>*/}
                {/*        </select>*/}
                {/*    </div>*/}

                {/*    {'default' === type ?*/}
                {/*        <Link to="#" className="size-guide"><i className="icon-th-list"/>size guide</Link> :*/}
                {/*        ''}*/}
                {/*</div>*/}

                <div className="details-filter-row details-row-size">
                    <label htmlFor="qty">Qty:</label>
                    <div className="product-details-quantity">
                        <input type="number" id="qty" className="form-control" defaultValue="1" min="1"
                               max="100" step="1" data-decimals="0" required/>
                    </div>
                </div>

                <div className="product-details-action">
                    {
                        isIEBrowser() || isEdgeBrowser() ?
                            <button className="btn-product btn-cart" onClick={addToCartHandler}
                                    style={{minHeight: "4rem"}}>
                                <span> <T id={"CART.ADD"}/></span>
                            </button>
                            :
                            <button className="btn-product btn-cart" onClick={addToCartHandler}>
                                <span> <T id={"CART.ADD"}/></span>
                            </button>
                    }
                    {
                        isIEBrowser() || isEdgeBrowser() ?
                            <div className="details-action-wrapper IE-detail-action-wrapper">
                                <button
                                    className={`btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}`}
                                    onClick={wishlistHandler}
                                    title={isWishlist ? "Go to wishlist" : "Add to wishlist"}
                                >
                                    <span>{isWishlist ? "go to wishlist" : "add to wishlist"}</span>
                                </button>
                            </div>
                            :

                            <div className="details-action-wrapper">
                                <button
                                    className={`btn-product btn-wishlist pl-0 pr-0  remove-from-wishlist`}
                                    onClick={wishlistHandler}
                                    title={isWishlist ? "Supprimer des favoris" : "Ajouter au favoris"}
                                >
                                    <span>{isWishlist ? "Supprimer des favoris" : "Ajouter au favoris"}</span>
                                </button>
                            </div>

                        // <div className="details-action-wrapper">
                        //     <button
                        //         className={`btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}`}
                        //         onClick={wishlistHandler}
                        //         title={isWishlist ? "Go to wishlist" : "Add to wishlist"}
                        //     >
                        //         <span>{isWishlist ? "Go to Wishlist" : "Add to Wishlist"}</span>
                        //     </button>
                        // </div>
                    }
                </div>

                <div className="product-details-footer">
                    {/*<div className="product-cat">*/}
                    {/*    <span>Category: </span>*/}
                    {/*    { product.category.map( ( cat, index ) => (*/}
                    {/*        <span key={ index } className="mr-0">*/}
                    {/*            <Link to="#">{ cat }</Link>*/}
                    {/*            { index < product.category.length - 1 ? ', ' : '' }*/}
                    {/*        </span>*/}
                    {/*    ) ) }*/}
                    {/*</div>*/}

                    {/*<div className="social-icons social-icons-sm">*/}
                    {/*    <span className="social-label">Share:</span>*/}
                    {/*    <Link to="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>*/}
                    {/*    <Link to="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>*/}
                    {/*    <Link to="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>*/}
                    {/*    <Link to="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>*/}
                    {/*</div>*/}
                    <div className="product-cat">
                        <span>Categories : </span> <br/><br/>
                        <ol>
                            {currentProduct.product.categories.map((category, index) => (
                                <li key={index} className="mr-0">
                                    {category.nameFr}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                {props.children}
            </div>
            :
            ""
    )
}

function mapStateToProps(state, props) {
    return {
        currentProduct: state.variants.variantDetail ? state.variants.variantDetail : {},
        // product: state.data.products.filter(product => product.id === parseInt(props.id))[0],
        isWishlist: (findIndex(state.userwishlist.wishlist, item => item.id === parseInt(props.id)) !== -1)
    }
}

export default connect(mapStateToProps,
    {
        addToCart, toggleWishlist
    }
)(ProductDetailOne);