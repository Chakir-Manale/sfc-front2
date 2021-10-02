import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {T} from "./partials/trans";
// import Custom Components
import {useTranslation} from "react-i18next";
import {showModal} from '../../actions';
import {logoutUser} from '../../actions/userActions';

function Header(props) {
    const {t, i18n} = useTranslation();
    const {wishlist, logo = "assets/images/logo.png", container = "container"} = props;
    let isLogged = props.isLogged;

    useEffect(() => {
        if (isLogged) {
        }
    }, [isLogged])


    return (
       <>
       <header className="header-top">
        <div className="container">

            <div className="header-top__logo" style={{display:"flex"}}>
                <a href="/">
                    <img src="assets/images/logo.png" alt="Space-For-Change" style={{maxWidth:50+"px"}}/>
                </a>
                <div className="header-top__call-text">
                    <p>SFC</p>
                </div>
            </div>
            
            <div className="header-top__call">

                <div className="header-top__call-item">
                    <svg width="24.375" height="24.343" viewBox="0 0 24.375 24.343">
                        <path id="phone.svg" className="header-top__call-icon cls-1"
                              d="M831.817,365.478a10.864,10.864,0,0,0-10.852-10.851v-1.55a12.416,12.416,0,0,1,12.4,12.4h-1.551Zm-6.2,0a4.656,4.656,0,0,0-4.651-4.651v-1.55a6.208,6.208,0,0,1,6.2,6.2h-1.55Zm-4.651-9.3a9.312,9.312,0,0,1,9.3,9.3h-1.551a7.759,7.759,0,0,0-7.751-7.751v-1.55Zm3.779,13.4,1.938-1.937a0.578,0.578,0,0,1,.064-0.058,1.924,1.924,0,0,1,2.511-.006,0.72,0.72,0,0,1,.071.064l3.488,3.487a1.871,1.871,0,0,1,0,2.646l-2.325,2.326a5.527,5.527,0,0,1-3.942,1.314c-3.14,0-7.446-1.609-11.712-5.8l0.41-.418-0.417.41a19.929,19.929,0,0,1-5.5-9.163c-0.666-2.764-.288-5.19,1.01-6.489l2.325-2.325a1.917,1.917,0,0,1,2.647,0l3.488,3.488a0.8,0.8,0,0,1,.067.077,1.879,1.879,0,0,1-.009,2.5c-0.018.022-.038,0.043-0.058,0.064l-1.938,1.937a1.419,1.419,0,0,0,0,2l2.938,2.937h0l2.94,2.94A1.42,1.42,0,0,0,824.744,369.578Zm6.522,3.554,0.454-.454a0.322,0.322,0,0,0,0-.454l-3.434-3.433c-0.017-.015-0.034-0.029-0.049-0.045a0.277,0.277,0,0,0-.464,0c-0.015.014-.03,0.029-0.046,0.042l-0.4.4ZM817.25,359.116l0.4-.4a0.447,0.447,0,0,1,.042-0.045,0.328,0.328,0,0,0,0-.464,0.652,0.652,0,0,1-.05-0.055l-3.429-3.429a0.323,0.323,0,0,0-.455,0l-0.454.454Zm1.456,8.621h0l-2.94-2.94a2.97,2.97,0,0,1,0-4.2l0.388-.388-3.943-3.941-0.775.774c-0.9.9-1.129,2.827-.6,5.029A20.532,20.532,0,0,0,824.366,375.6c2.2,0.531,4.129.3,5.029-.6l0.775-.775-3.942-3.942-0.388.388a2.971,2.971,0,0,1-4.2,0Z"
                              transform="translate(-809 -353.063)"/>
                    </svg>
                    <div className="header-top__call-text">
                        <p>Call us for any question</p>
                        <a href="tel:+1 800 456 7890">+212 06 12 34 56 78</a>
                    </div>
                </div>
                
                <div className="header-top__call-item">
                    <svg width="18.88" height="25.719" viewBox="0 0 18.88 25.719">
                        <path id="address.svg" className="header-top__call-icon cls-1"
                              d="M1033.75,377.71l-7.99-11.282a9.433,9.433,0,1,1,16-.04Zm0-24.133a7.845,7.845,0,0,0-6.68,11.983l6.68,9.43,6.7-9.468A7.841,7.841,0,0,0,1033.75,353.577Zm0,11.78a3.927,3.927,0,1,1,3.93-3.928A3.931,3.931,0,0,1,1033.75,365.357Zm0-6.283a2.356,2.356,0,1,0,2.36,2.355A2.362,2.362,0,0,0,1033.75,359.074Z"
                              transform="translate(-1024.31 -352)"/>
                    </svg>
                    <div className="header-top__call-text">
                        <p>American Space</p>
                        <a href="">Oujda</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    

    <header className="header-middle header-middle_white-transparent">
        <div className="container">

            <div className="navbar-logo">
                <a href="/">
                    <img src="assets/images/logo.png" alt="Space-For-Change" style={{maxWidth:50+"px"}}/>
                </a>
            </div>

            <div className="navbar-icon">
                <span></span>
            </div>

            <div className="navbar">

                <ul className="navbar__menu">
                    <li className="navbar__menu-item">
                        <Link to={`${process.env.PUBLIC_URL}`} className="navbar__menu-link active">
                            Home
                        </Link>
                    </li>

                    <li className="navbar__menu-item">
                        <Link to={`${process.env.PUBLIC_URL}`} className="navbar__menu-link active">
                            Services
                        </Link>
                    </li>

                    <li className="navbar__menu-item">
                        <Link to={`${process.env.PUBLIC_URL}/about`} className="navbar__menu-link">
                            About Us
                        </Link>
                    </li>

                    <li className="navbar__menu-item">
                        <Link to={`${process.env.PUBLIC_URL}/blog/grid/2cols`} className="navbar__menu-link">
                            Blog
                        </Link>
                    </li>
                </ul>

                <div className="navbar__right">
                    <a href="https://workspace-sfc.herokuapp.com/" target={"_blank"} className="btn btn_pink" id="popup-form-open">Post Your Own Articles</a>
                </div>
            </div>

        </div>
    </header>
       </>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user.user ? state.user.user : {}
    }
}

export default connect(mapStateToProps, {
    showModal,
    logoutUser
})(Header);