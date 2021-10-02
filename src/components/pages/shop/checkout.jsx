import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import Accordion from '../../features/accordion/accordion';
import {cartListSaveOrder, saveAddress, clearCashList} from '../../../actions/cartlistActions';
import {T} from "../../common/partials/trans";
import {profileUser} from '../../../actions/userActions';

function Checkout(props) {
    // const { cartlist, total } = props;
    // const shippingPrice = {"free": 0, "standard": 10, "express": 20};
    // const shippingObj = {"free": "Free shipping", "standard": "Standard", "express": "Express"};
    let cartlistv = props.cartlistv;
    let cartlistp = props.cartlistp;
    let cartSellingPrice = props.cartSellingPrice;
    let user = props.user;

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const [note, setNote] = useState("");
    const [saveaddress, setSaveaddress] = useState("");
    const [paymentMethodKey, setPaymentMethodKey] = useState('CASH');
    // useEffect(() => {
    //     let item = document.querySelector("#checkout-discount-input");
    //
    //     var opactiyEffect = function (e) {
    //         e.currentTarget.parentNode.querySelector("label").setAttribute("style", "opacity: 0");
    //     }
    //
    //     var blurEffect = function (e) {
    //         let $this = e.currentTarget;
    //         if ($this.length !== 0) {
    //             $this.parentNode.querySelector("label").setAttribute("style", "opacity: 0");
    //         } else {
    //             $this.parentNode.querySelector("label").setAttribute("style", "opacity: 1");
    //         }
    //     }
    //
    //     item.addEventListener("focus", opactiyEffect);
    //
    //     item.addEventListener("blur", blurEffect)
    //
    //     return () => {
    //         item.removeEventListener("focus", opactiyEffect);
    //
    //         item.removeEventListener("blur", blurEffect);
    //     }
    // }, [])

    function clearFields() {
        document.getElementById("fullName").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("address1").value = "";
        document.getElementById("address2").value = "";
        document.getElementById("emailField").value = "";
        document.getElementById("noteField").value = "";
    }

    function authoCompleteAdresse(e) {
        console.log("SetAddress");
        let address = user.addresses.find(address => address.id == e);
        if (address != undefined) {
            setFullName(address.fullName);
            setPhoneNumber(address.phoneNumber);
            setEmail(address.email);
            setLine1(address.line1);
            setLine2(address.line2);
        }
    }

    return (
        <>
            <Helmet>
                <title>SFC | Checkout</title>
            </Helmet>

            <h1 className="d-none">SFC - Checkout</h1>

            <div className="main">

                <PageHeader title="Checkout" subTitle="Shop"/>
                <Breadcrumb title="Checkout" parent1={["Shop", "shop/sidebar/list"]}/>

                <div className="page-content">
                    <form id='paymentForm' style={{display: 'none'}}/>

                    <div className="checkout">
                        <div className="container">
                            {/*<div className="checkout-discount">*/}
                            {/*    <form action="#">*/}
                            {/*        <input type="text" className="form-control" required id="checkout-discount-input"/>*/}
                            {/*        <label htmlFor="checkout-discount-input" className="text-truncate">Have a*/}
                            {/*            coupon? <span>Click here to enter your code</span></label>*/}
                            {/*    </form>*/}
                            {/*</div>*/}

                            <form onSubmit={(e) => {
                                e.preventDefault();
                                props.cartListSaveOrder({
                                    paymentMethodKey, fullName, phoneNumber, email, line1, line2
                                }).then(r => {
                                    if (paymentMethodKey === 'CMI') {
                                        const {url, data} = r.data
                                        var form = document.getElementById('paymentForm');
                                        form.method = 'POST';
                                        form.action = url;
                                        Object.keys(data).forEach(name => {
                                            var input = document.createElement("input");
                                            input.name = name
                                            input.value = data[name]
                                            form.appendChild(input);
                                        })
                                        console.log('submit')
                                        form.submit();
                                    }
                                });

                                if (saveaddress) {
                                    props.saveAddress(fullName, phoneNumber, email, line1, line2);
                                    props.profileUser();
                                    props.clearCashList();
                                    clearFields();
                                }

                            }} action="">

                                <div className="row">
                                    <div className="col-lg-9">
                                        <h2 className="checkout-title">Methode de payement</h2>
                                        <div className="form-group row">
                                            <select
                                                value={paymentMethodKey}
                                                className="form-control"
                                                onChange={(e) => {
                                                    setPaymentMethodKey(e.target.value)
                                                }}
                                            >
                                                <option value={'CASH'}>Payement à la livraison</option>
                                                <option value={'CMI'}>CMI</option>
                                            </select>
                                        </div>

                                        <h2 className="checkout-title">Détails de la facturation</h2>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label>Séléctionnez une adresse</label>
                                                <select
                                                    className="form-control"
                                                    id="addressSelect"
                                                    onChange={(e) => {
                                                        authoCompleteAdresse(e.target.value)
                                                    }}
                                                >
                                                    <option>Selectionnez une address qui existe déjà
                                                    </option>
                                                    {
                                                        user &&
                                                        user.addresses.map(item => (
                                                            <option value={item.id}>
                                                                {item.fullName} _ {item.line1} _ {item.line2} _ {item.phoneNumber} _ {item.email}
                                                            </option>
                                                        ))
                                                    }

                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>Full Name *</label>
                                                <input type="text" className="form-control"
                                                       value={fullName} id="fullName"
                                                       onChange={(e) => setFullName(e.target.value)} required/>

                                            </div>

                                            <div className="col-sm-6">
                                                <label>Phone Number *</label>
                                                <input type="tel" className="form-control"
                                                       value={phoneNumber} id="phoneNumber"
                                                       onChange={(e) => setPhoneNumber(e.target.value)} required/>
                                            </div>
                                        </div>

                                        <label>
                                            <T id={"CHECKOUT.BILLING.STREET.ADDRESS"}/> *
                                        </label>
                                        <input type="text" className="form-control"
                                               placeholder="Numéro de maison et nom de la rue"
                                               value={line1} id="address1"
                                               onChange={(e) => setLine1(e.target.value)} required/>

                                        <input type="text" className="form-control" placeholder="Appartments, etc ..."
                                               value={line2} id="address2"
                                               onChange={(e) => setLine2(e.target.value)} required/>

                                        <label>Email address *</label>
                                        <input type="email" className="form-control"
                                               value={email} id="emailField"
                                               onChange={(e) => setEmail(e.target.value)} required/>

                                        <label>Order notes (facultatif)</label>
                                        {/*<textarea className="form-control" cols="30" rows="4"*/}
                                        {/*          placeholder="Notes about your order, e.g. special notes for delivery"></textarea>*/}
                                        <textarea className="form-control" cols="30" rows="4"
                                                  id="noteField"
                                                  placeholder="Notes sur votre commande, par ex. notes spéciales pour la livraison"
                                                  onChange={(e) => setNote(e.target.value)}></textarea>

                                    </div>

                                    <aside className="col-lg-3">
                                        <div className="summary">
                                            <h3 className="summary-title">Votre Commande</h3>

                                            <table className="table table-summary">
                                                <thead>
                                                <tr>
                                                    <th>Produit</th>
                                                    <th>Total</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <th><u style={{fontWeight: 'bold'}}>Les Produits:</u></th>
                                                    <td></td>
                                                </tr>
                                                {
                                                    cartlistv.map((item, index) =>
                                                        <tr key={index}>
                                                            <td><Link to="#">{item.variant.nameFr}</Link></td>
                                                            {/*<td>{ item.sum.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) } MAD</td>*/}
                                                            <td>{item.qty * item.variant.price} MAD</td>
                                                        </tr>
                                                    )
                                                }
                                                <tr>
                                                    <th><u style={{fontWeight: 'bold'}}>Les Packs:</u></th>
                                                    <td></td>
                                                </tr>
                                                {
                                                    cartlistp.map((item, index) =>
                                                        <tr key={index}>
                                                            <td><Link to="#">{item.pack.nameFr}</Link></td>
                                                            {/*<td>{ item.sum.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) } MAD</td>*/}
                                                            <td>{item.qty * item.pack._sellingPrice} MAD</td>
                                                        </tr>
                                                    )
                                                }

                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>{cartSellingPrice} MAD</td>
                                                </tr>
                                                </tbody>
                                            </table>

                                            <Accordion type="checkout">
                                                {/*<Card title="Direct bank transfer" expanded={true}>*/}
                                                {/*    Make your payment directly into our bank account. Please use your*/}
                                                {/*    Order ID as the payment reference. Your order will not be shipped*/}
                                                {/*    until the funds have cleared in our account.*/}
                                                {/*</Card>*/}

                                                {/*<Card title="Check payments">*/}
                                                {/*    Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.*/}
                                                {/*    Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.*/}
                                                {/*</Card>*/}

                                                {/*<Card title="Cash on delivery">*/}
                                                {/*    Quisque volutpat mattis eros. Lorem ipsum dolor sit amet,*/}
                                                {/*    consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis*/}
                                                {/*    eros.*/}
                                                {/*</Card>*/}

                                                {/*<Card title='PayPal'>*/}
                                                {/*    <small className="float-right paypal-link">What is PayPal?</small>*/}
                                                {/*    Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non,*/}
                                                {/*    semper suscipit, posuere a, pede. Donec nec justo eget felis*/}
                                                {/*    facilisis fermentum.*/}
                                                {/*</Card>*/}

                                                {/*<Card title='Credit Card (Stripe)'>*/}
                                                {/*    <img*/}
                                                {/*        src={`${process.env.PUBLIC_URL}/assets/images/payments-summary.png`}*/}
                                                {/*        alt="payments cards"/>*/}
                                                {/*    Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit*/}
                                                {/*    amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat*/}
                                                {/*    mattis eros. Lorem ipsum dolor sit ame.*/}
                                                {/*</Card>*/}
                                            </Accordion>

                                            <button type="submit"
                                                    className="btn btn-outline-primary-2 btn-order btn-block">
                                                <span className="btn-text">Passer la commande</span>
                                                <span className="btn-hover-text">Passer la commande</span>
                                            </button>
                                        </div>
                                    </aside>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const mapStateToProps = (state) => ({
    cartlistv: state.usercartlist.cartlist_variants ? state.usercartlist.cartlist_variants : [],
    cartlistp: state.usercartlist.cartlist_packs ? state.usercartlist.cartlist_packs : [],
    // total: getCartTotal(state.cartlist.cart),
    cartSellingPrice: state.usercartlist.sellingPrice ? state.usercartlist.sellingPrice : 0,
    shipping: state.cartlist.shipping,
    user: state.user.user ? state.user.user : {},

})

export default connect(mapStateToProps, {cartListSaveOrder, clearCashList, profileUser, saveAddress})(Checkout);

