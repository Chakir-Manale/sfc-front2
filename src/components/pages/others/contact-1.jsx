import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Breadcrumb from '../../common/breadcrumb';
import {T} from '../../common/partials/trans';
import {useDispatch} from "react-redux";
import {sendContactMessage} from "../../../actions/contactActions";

function ContactOne() {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const dispatch = useDispatch();

    function sendMessageHandler() {
        console.log(email, fullName, subject, message, phoneNumber)
        dispatch(sendContactMessage(email, fullName, subject, message, phoneNumber));
    }

    return (
        <div className="main">
            <Helmet>
                <title>Flow</title>
            </Helmet>

            <h1 className="d-none">Flow</h1>

            <Breadcrumb title="Contact Us" parent1={["pages", "pages/about"]} adClass="border-0 mb-0"/>

            <div className="container">
                <div className="page-header page-header-big text-center"
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/contact-header-bg.jpg)`}}>
                    <h1 className="page-title text-white">
                        <T id={"CONTACT.US"}/>
                        <span className="text-white">
                            <T id={"CONTACT.US.SUBTITLE"}/>
                        </span></h1>
                </div>
            </div>

            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <h2 className="title mb-1">
                                <T id={"CONTACT.INFOS"}/>
                            </h2>
                            <p className="mb-3">
                                Flow vous garantit des produits naturels,sans matières synthetiques,des produits
                                vraiment sains et
                                éthiques aux extraits de plantes et de fleurs,fabriqués de manière artisanale dans le
                                respect des
                                normes et des bonnes pratiques.
                            </p>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="contact-info">
                                        {/*<h3>The Office</h3>*/}
                                        <ul className="contact-list">
                                            {/*<li>*/}
                                            {/*    <i className="icon-map-marker"/>*/}
                                            {/*    70 Washington Square South New York, NY 10012, United States*/}
                                            {/*</li>*/}
                                            <li>
                                                <i className="icon-phone"/>
                                                <Link to="tel:+212611339769">+212 6 11 33 97 69</Link>
                                            </li>
                                            <li>
                                                <i className="icon-envelope"/>
                                                <Link to="mailto:contact@naturalflow.m">contact@naturalflow.ma</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/*<div className="col-sm-5">*/}
                                {/*    <div className="contact-info">*/}
                                {/*        <h3>The Office</h3>*/}

                                {/*        <ul className="contact-list">*/}
                                {/*            <li>*/}
                                {/*                <i className="icon-clock-o"></i>*/}
                                {/*                <span className="text-dark">Monday-Saturday</span> <br/>11am-7pm ET*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <i className="icon-calendar"></i>*/}
                                {/*                <span className="text-dark">Sunday</span> <br/>11am-6pm ET*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="title mb-1">
                                <T id={"CONTACT.FORM.TITLE"}/>
                            </h2>
                            <p className="mb-2">
                                <T id={"CONTACT.FORM.SUBTITLE"}/>
                            </p>

                            <form className="contact-form mb-3"
                                  onSubmit={(e) => {
                                      e.preventDefault();
                                      sendMessageHandler();
                                  }}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="cname" className="sr-only">
                                            <T id={"CONTACT.FORM.NAME"}/>
                                        </label>
                                        <input type="text" className="form-control" id="cname"
                                               placeholder="Nom & prénom *"
                                               value={fullName}
                                               onChange={(e) => setFullName(e.target.value)}
                                               required/>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="cemail" className="sr-only">
                                            <T id={"CONTACT.FORM.EMAIL"}/>
                                        </label>
                                        <input type="email" className="form-control" id="cemail" placeholder="Email *"
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}
                                               required/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="cphone" className="sr-only">
                                            <T id={"CONTACT.FORM.PHONE"}/>
                                        </label>
                                        <input type="tel" className="form-control" id="cphone"
                                               value={phoneNumber}
                                               onChange={(e) => setPhoneNumber(e.target.value)}
                                               placeholder="N° Téléphone *"/>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="csubject" className="sr-only">
                                            <T id={"CONTACT.FORM.SUBJECT"}/>
                                        </label>
                                        <input type="text" className="form-control" id="csubject"
                                               value={subject}
                                               onChange={(e) => setSubject(e.target.value)}
                                               placeholder="Sujet *"/>
                                    </div>
                                </div>

                                <label htmlFor="cmessage" className="sr-only">
                                    <T id={"CONTACT.FORM.MESSAGE"}/>
                                </label>
                                <textarea className="form-control" cols="30" rows="4" id="cmessage" required
                                          value={message}
                                          onChange={(e) => setMessage(e.target.value)}
                                          placeholder="Message *"></textarea>

                                <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                    <span>
                                        <T id={"CONTACT.FORM.SUBMIT"}/>
                                    </span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/*<hr className="mt-4 mb-5"/>*/}

                    {/*<div className="stores mb-4 mb-lg-5">*/}
                    {/*    <h2 className="title text-center mb-3">Our Stores</h2>*/}

                    {/*    <div className="row">*/}
                    {/*        <div className="col-lg-6">*/}
                    {/*            <div className="store">*/}
                    {/*                <div className="row">*/}
                    {/*                    <div className="col-sm-5 col-xl-6">*/}
                    {/*                        <figure className="store-media mb-2 mb-lg-0">*/}
                    {/*                            <img src={`${process.env.PUBLIC_URL}/assets/images/stores/img-1.jpg`}*/}
                    {/*                                 alt="desc"/>*/}
                    {/*                        </figure>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-sm-7 col-xl-6">*/}
                    {/*                        <div className="store-content">*/}
                    {/*                            <h3 className="store-title">Wall Street Plaza</h3>*/}
                    {/*                            <address>88 Pine St, New York, NY 10005, USA</address>*/}
                    {/*                            <div><Link to="tel:#">+1 987-876-6543</Link></div>*/}

                    {/*                            <h4 className="store-subtitle">Store Hours:</h4>*/}
                    {/*                            <div>Monday - Saturday 11am to 7pm</div>*/}
                    {/*                            <div>Sunday 11am to 6pm</div>*/}

                    {/*                            <Link to="#" className="btn btn-link"*/}
                    {/*                                  target="_blank"><span>View Map</span><i*/}
                    {/*                                className="icon-long-arrow-right"></i></Link>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="col-lg-6">*/}
                    {/*            <div className="store">*/}
                    {/*                <div className="row">*/}
                    {/*                    <div className="col-sm-5 col-xl-6">*/}
                    {/*                        <figure className="store-media mb-2 mb-lg-0">*/}
                    {/*                            <img src={`${process.env.PUBLIC_URL}/assets/images/stores/img-2.jpg`}*/}
                    {/*                                 alt="desc"/>*/}
                    {/*                        </figure>*/}
                    {/*                    </div>*/}

                    {/*                    <div className="col-sm-7 col-xl-6">*/}
                    {/*                        <div className="store-content">*/}
                    {/*                            <h3 className="store-title">One New York Plaza</h3>*/}
                    {/*                            <address>88 Pine St, New York, NY 10005, USA</address>*/}
                    {/*                            <div><Link to="tel:#">+1 987-876-6543</Link></div>*/}

                    {/*                            <h4 className="store-subtitle">Store Hours:</h4>*/}
                    {/*                            <div>Monday - Friday 9am to 8pm</div>*/}
                    {/*                            <div>Saturday - 9am to 2pm</div>*/}
                    {/*                            <div>Sunday - Closed</div>*/}

                    {/*                            <Link to="#" className="btn btn-link"*/}
                    {/*                                  target="_blank"><span>View Map</span><i*/}
                    {/*                                className="icon-long-arrow-right"></i></Link>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                {/*<div id="map"></div>*/}
            </div>
        </div>
    )
}

export default React.memo(ContactOne);