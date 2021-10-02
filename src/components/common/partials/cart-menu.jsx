import React from 'react';
import {Link} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
// import {getCartCount, getCartTotal} from '../../../services';
import {removeFromCart} from '../../../actions';
// import {safeContent} from '../../../utils';
import {T} from "./trans";
import {removePackFromCartlist, removeVariantFromCartlist} from "../../../actions/cartlistActions";

// import {useTranslation} from "react-i18next";

function CartMenu(props) {
    // const {cartlist, removeFromCart} = props;
    // const {t} = useTranslation()
    // let total = getCartTotal(cartlist);

    let cartlistTotal = props.cartlistTotal;
    let cartSellingPrice = props.cartSellingPrice;
    let usercartlistvariants = props.usercartlistvariants;
    let usercartlistpacks = props.usercartlistpacks;

    const dispatch = useDispatch();
    return (
        <div className="dropdown cart-dropdown">
            <Link to={`${process.env.PUBLIC_URL}/shop/cart`} className="dropdown-toggle" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <i className="icon-shopping-cart"/>
                <span className="cart-count">{cartlistTotal}</span>
                <span className="cart-txt">{cartSellingPrice} MAD</span>
            </Link>

            <div className={`dropdown-menu dropdown-menu-right ${cartlistTotal === 0 ? 'text-center' : ''}`}>
                {
                    0 === cartlistTotal ?
                        <p><T id={"CART.MENU.EMPTY"}/></p>
                        :
                        <>
                            <p style={{paddingBottom: '10px', color: 'black', marginBottom: '10px'}}>
                                <T id={"PRODUCTS"}/> :
                            </p>
                            <div className="dropdown-cart-products">
                                {
                                    usercartlistvariants.map((item, index) => (
                                        <div className="product" key={index}>
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <Link to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
                                                        // dangerouslySetInnerHTML={safeContent(item._fullNameFr)}
                                                    />
                                                    {item.variant.nameFr}
                                                </h4>

                                                <span className="cart-product-info">
                                                <span className="cart-product-qty">{item.qty}</span>
                                                x {item.variant._sellingPrice} MAD
                                            </span>
                                            </div>

                                            <figure className="product-image-container">
                                                {/*<Link to={ `${process.env.PUBLIC_URL}/product/default/7` } className="product-image">
                                                <img src={ process.env.PUBLIC_URL + '/' + item.pictures[ 0 ] } data-oi={ process.env.PUBLIC_URL + '/' + item.pictures[ 0 ] } alt="product" />
                                            </Link>*/}
                                            </figure>
                                            <button className="btn-remove" title="Remove Product"
                                                    onClick={(e) => dispatch(removeVariantFromCartlist(item.variant.id))}>
                                                <i className="icon-close"/>
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>

                            <p style={{paddingBottom: '10px', color: 'black', marginBottom: '10px'}}>PACKS :</p>
                            <div className="dropdown-cart-products">
                                {usercartlistpacks.map((item, index) => (
                                    <div className="product" key={index}>
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                {item.pack.nameFr}
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">{item.qty}</span>
                                                x {item.pack._sellingPrice} MAD
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            {/*<Link to={ `${process.env.PUBLIC_URL}/product/default/7` } className="product-image">
                                                <img src={ process.env.PUBLIC_URL + '/' + item.pictures[ 0 ] } data-oi={ process.env.PUBLIC_URL + '/' + item.pictures[ 0 ] } alt="product" />
                                            </Link>*/}
                                        </figure>
                                        <button className="btn-remove" title="Remove Product"
                                                onClick={(e) => dispatch(removePackFromCartlist(item.pack.id))}>
                                            <i className="icon-close"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="dropdown-cart-total">
                                <span>
                                    <T id={'CART.TOTAL'}/>
                                </span>

                                <span className="cart-total-price">{cartSellingPrice} MAD</span>
                            </div>

                            <div className="dropdown-cart-action">
                                <Link to={`${process.env.PUBLIC_URL}/shop/cart`} className="btn btn-primary">
                                    <T id={'CART.BUTTON.VIEW'}/>
                                </Link>
                                <Link to={`${process.env.PUBLIC_URL}/shop/checkout`}
                                      className="btn btn-outline-primary-2"><span>Checkout</span>
                                    <i className="icon-long-arrow-right"/></Link>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        usercartlistvariants: state.usercartlist.cartlist_variants ? state.usercartlist.cartlist_variants : [],
        usercartlistpacks: state.usercartlist.cartlist_packs ? state.usercartlist.cartlist_packs : [],
        // cartlist: state.cartlist.cart ? state.cartlist.cart : [],
        cartlistTotal: state.usercartlist.total ? state.usercartlist.total : 0,
        cartSellingPrice: state.usercartlist.sellingPrice ? state.usercartlist.sellingPrice : 0,
    }
}

export default connect(mapStateToProps, {removeVariantFromCartlist})(CartMenu);
