import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
// import Custom Components
import style from './style.scss';
import Accordion from '../features/accordion/accordion';
import Card from '../features/accordion/card';
import OwlCarousel from '../features/owl-carousel';
import {mainSlider2} from '../settings';
import {Link} from 'react-router-dom';
import {articles} from '../../mock_data/articles';
import {connect, useDispatch} from "react-redux";
import {getArticles} from "../../actions/blogActions";

function IndexSixteen(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        // document.getElementById( "menu-home" ).classList.add( "active" );
        style.use();

        return (() => {
            // document.getElementById( "menu-home" ).classList.remove( "active" );
            style.unuse();
        })
    }, []);

    useEffect(() => {
        getArticles();
    }, [dispatch]);


    let articles = props.articles;

    return (
        <>
            <Helmet>
                <title>SFC | Space For Change</title>
            </Helmet>

            <h1 className="d-none">SFC | Space For Change</h1>

            <header className="header-bottom">
                <div className="header-bottom__banner owl-carousel owl-theme">
                    <div className="slide-item">
                        <img src="assets/images/banner/annonce1.jpg"/>
                        <div className="slide-item__bg">
                            <div className="icon">
                                <img src="assets/images/banner/banner-shape.png"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="slide-item__block">
                                <h1 className="slide-item__title">Space <span>For<br/>Change</span></h1>
                                <h4 className="slide-item__subtitle">Be The Change You Want To See In The World!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="about" id="about">
                <div className="about__bg">
                    <div className="icon">
                        <svg width="830" height="1013" viewBox="0 0 830 1013">
                            <path id="Shape-2.svg" className="cls-4"
                                  d="M4175.59,2050a0.7,0.7,0,1,1,.7.7A0.7,0.7,0,0,1,4175.59,2050Zm95.42,217.06v3.96l-47.84-27.65-82.92,47.95,32.42,18.75a4.384,4.384,0,1,1,3.95,6.85v79.82a3.328,3.328,0,1,1-3.03,5.26l-64,37a10.175,10.175,0,1,1-17.95,0l-62.17-35.94a5.445,5.445,0,1,1-4.86-8.45V2321.1a8.568,8.568,0,1,1,7.56-13.13l52.74-30.49-58.99-34.11-98.63,57.02-100.34-58.01V2128.32l-98.64-57.03V1955.26l66.06-38.19-65.79-38.05a7.531,7.531,0,0,1-12.71,0l-62.86,36.35a7.275,7.275,0,1,1-12.93,0l-62-35.85a8.526,8.526,0,1,1-7.54-13.08v-69.66a9.333,9.333,0,1,1,8.23-14.28l64.5-37.29a3.67,3.67,0,0,1-.33-1.52,3.6,3.6,0,0,1,3.28-3.59v-72.85a11.081,11.081,0,0,1-9.41-16.32l-59.85-34.6a7.235,7.235,0,1,1-6.42-11.14v-10.96l-37.77,21.84L3440.99,1563h6.85l84.93,49.1,37.77-21.83V1563h0.66v26.89l46.5-26.89h6.85l-53.35,30.85v11.34a7.249,7.249,0,0,1,6.09,10.57l59.85,34.6a11.049,11.049,0,0,1,18.81,0l57.91-33.48a9.558,9.558,0,0,1-1.1-4.46,9.421,9.421,0,0,1,1.67-5.38L3638.25,1563h6.85l71.86,41.54a9.408,9.408,0,0,1,4.94-1.59V1563h0.65v39.95a9.466,9.466,0,0,1,9.06,8.24h0l83.36-48.19h6.84l-90.07,52.08v2.47l38.03,21.99,21.13,12.21a8.277,8.277,0,0,1,14,0l18.12-10.47,44.1-25.5h0l0.33,0.57-0.33-.57h0a7.3,7.3,0,0,1,6.13-10.63v-20.33L3835.51,1563h6.85l30.89,17.86V1563h0.66v18.24l53.38,30.86,84.93-49.1h6.85L3929,1615.08v29.01l12.3,7.11a9.378,9.378,0,0,1,15.92,0l17.16-9.92,39.97-23.11h0v-0.01a12.061,12.061,0,0,1,10.26-17.79V1563h0.65v37.37a12.069,12.069,0,0,1,10.27,17.8l36.95,21.37,24.22,14a4.724,4.724,0,0,1,7.83,0l18.31-10.59v-27.87L4032.76,1563h6.85l84.94,49.1,51.41-29.72V1563h0.66v18.99l32.86-18.99h6.85l-39.71,22.96v25.05a1.449,1.449,0,0,1-.33,2.86,1.417,1.417,0,0,1-1.05-.45l-48.98,28.31v85.42l96.91,56.03,47.84-27.65v3.96l-46.12,26.67v112.07l46.12,26.66v3.97l-47.84-27.65-96.91,56.03v112.07l96.91,56.04,47.84-27.66v3.97l-46.12,26.66V2240.4Zm-238.51,41.48a8.568,8.568,0,0,1-7.24,12.56v73.51a5.447,5.447,0,0,1,5.11,5.45,5.367,5.367,0,0,1-.57,2.43l62.17,35.95a10.168,10.168,0,0,1,17.29-.01l64-37.01a3.253,3.253,0,0,1-.29-1.36,3.333,3.333,0,0,1,2.99-3.32v-79.82a4.4,4.4,0,0,1-4.05-4.38,4.308,4.308,0,0,1,.43-1.9l-32.75-18.94-15.04,8.69-38.98-22.53Zm103.66-18.82-29.69-17.17a6.954,6.954,0,0,1-11.72,0l-5.76,3.33,35.56,20.56Zm-110.24-164.37h0l96.92-56.03V1957.24l-21.9-12.66v53.68a7.983,7.983,0,1,1-7.06,12.25l-60.43,34.94a9.655,9.655,0,1,1-17.03,0L3953.38,2009a4.962,4.962,0,1,1-4.45-7.72v-55.56L3929,1957.24v112.07l96.92,56.04h0Zm67.87-210.19-65.26-37.73a4.27,4.27,0,0,1-.9.95v19.85l48.46,28.02,24.2,13.99v-13.81A7.718,7.718,0,0,1,4093.79,1915.16Zm-67.87-13.95-76.33,44.13v55.94a4.987,4.987,0,0,1,4.12,7.15l63.04,36.45a9.637,9.637,0,0,1,16.37,0l60.43-34.94a7.985,7.985,0,0,1,6.74-11.68V1944.2Zm-76.33,25.72v14.44l74.61-43.14v-18.97a4.36,4.36,0,0,1-2.86-1.84l-10,5.79-54.82,31.7h0A8.212,8.212,0,0,1,3949.59,1926.93Zm-7.59-12.02-65.51-37.88a3.573,3.573,0,0,1-5.82,0l-38.48,22.25,46.64,26.97,48.46,28.02,21.64-12.51v-14.83A8.212,8.212,0,0,1,3942,1914.91Zm-76.05-131.49-15.42-8.92-20.15,11.66v112.07l1.15,0.67,38.82-22.44a3.559,3.559,0,0,1,2.9-5.04v-75.33a8.635,8.635,0,0,1-8.3-8.64A8.53,8.53,0,0,1,3865.95,1783.42Zm-35.57,456.98,96.91,56.04,96.91-56.04V2128.32l-29.36-16.98-67.55-39.05-48.46,28.01-48.45,28.02V2240.4Zm-98.64-283.16v112.08l96.92,56.03h0l96.92-56.04V1957.24l-7.49-4.33-89.33-51.65-27.33,15.8a3.9,3.9,0,0,1-6.78,3.81Zm-9.19-89.81a7.548,7.548,0,0,1,6.36,11.02l65.8,38.05a3.876,3.876,0,0,1,3.19-1.67c0.11,0,.22,0,0.33.01l28.72-16.61V1786.16l-50.91-29.44-45.16,26.11a9.832,9.832,0,0,1-8.33,14.44v70.16Zm-78.95-121.65-64.5,37.29a9.338,9.338,0,0,1-7.9,13.71v69.66a8.544,8.544,0,0,1,7.21,12.51l62,35.85a7.269,7.269,0,0,1,12.27,0l62.86-36.34a7.556,7.556,0,0,1,6.36-11.03v-70.16a9.832,9.832,0,0,1-8.33-14.44l-64.08-37.05A3.6,3.6,0,0,1,3643.6,1745.78Zm84.71-16.65V1619.68a9.448,9.448,0,0,1-14.12-2.23l-57.9,33.48a11.08,11.08,0,0,1-9.42,16.32v72.85a3.6,3.6,0,0,1,3.28,3.59,3.67,3.67,0,0,1-.33,1.52l30.11,17.41,33.97,19.64a9.8,9.8,0,0,1,16.65,0h0l44.83-25.92Zm69.27-64.66a8.288,8.288,0,0,1-7.95-8.29,8.372,8.372,0,0,1,.94-3.86l-18.11-10.47-40.72-23.54v108.84l47.06,27.21,13.76-7.96a5.86,5.86,0,0,1-.65-2.71,5.991,5.991,0,0,1,5.67-5.98v-73.24Zm-4.69,82.51-13.43,7.76,49.2,28.44,18.44-10.66-44.18-25.54A5.983,5.983,0,0,1,3792.89,1746.98Zm132.69-131.9-51.67-29.88v19.95a7.3,7.3,0,0,1,6.13,10.63l45.54,26.33v-27.03Zm0,27.79-45.87-26.52h0a7.283,7.283,0,0,1-12.26,0l-41.09,23.76-21.13,12.22a8.293,8.293,0,0,1-7,12.14v73.24a6,6,0,0,1,5.67,5.98,5.932,5.932,0,0,1-.65,2.72l28.04,16.21,16.47,9.52,70.33-40.66,7.49-4.33v-84.28Zm1.71,87.25-48.46,28.02-27.65,15.98,15.1,8.73a8.624,8.624,0,0,1,14.61,0l63.24-36.57a5.777,5.777,0,0,1-.61-2.59,5.689,5.689,0,0,1,1.19-3.5Zm21.64-64.54a9.4,9.4,0,0,1-7.96-13.81l-11.97-6.92v82.3l18.94,10.95a6.38,6.38,0,0,1,.99-0.14v-72.38Zm-4.47,81.27-63.24,36.57a8.657,8.657,0,0,1-7.31,12.67v75.33a3.558,3.558,0,0,1,3.23,3.55,3.685,3.685,0,0,1-.32,1.49l65.51,37.88a8.185,8.185,0,0,1,13.86,0l18.19-10.52,46.64-26.97h0a4.254,4.254,0,0,1-.43-1.88,4.356,4.356,0,0,1,3.61-4.3v-76.91a6.354,6.354,0,0,1-4.92-9.19l-65.23-37.72A5.734,5.734,0,0,1,3944.46,1746.85Zm75.4,36.79-25.02-14.47-40.28-23.28h0a3.389,3.389,0,0,1-.18.39l28.24,16.32,36.99,21.4v-0.01C4019.69,1783.87,4019.77,1783.76,4019.86,1783.64Zm80.43-122.75a4.707,4.707,0,0,1-4.39-4.71,4.8,4.8,0,0,1,.47-2.07l-21.2-12.26-39.97-23.11h0a12.029,12.029,0,0,1-20.52,0l-57.13,33.03a9.4,9.4,0,0,1-7.96,13.81v72.38a5.755,5.755,0,0,1,5.17,4.08l68.14,39.39a6.461,6.461,0,0,1,2.04-.33,6.316,6.316,0,0,1,3.14.83l67.71-39.14a4.905,4.905,0,0,1,4.5-4v-77.9Zm-3.75,85.54-65.95,38.13a6.366,6.366,0,0,1-2.96,8.64v78.35a4.348,4.348,0,0,1,1.66,3.42,4.474,4.474,0,0,1-.43,1.89l43.62,25.22,21.64,12.51a7.693,7.693,0,0,1,12.99,0l67.43-38.99a1.9,1.9,0,0,1-.11-0.63,1.859,1.859,0,0,1,1.53-1.83v-81.77a3.931,3.931,0,0,1-3.59-3.92,4.077,4.077,0,0,1,.37-1.67l-68.05-39.34A4.9,4.9,0,0,1,4096.54,1746.43Zm26.3-102.72-17.98,10.4a4.8,4.8,0,0,1,.47,2.07,4.723,4.723,0,0,1-4.39,4.72v77.89a5,5,0,0,1,1.3.26l20.6-11.9v-83.44Zm52.06-30.86a1.54,1.54,0,0,1-.06-0.43,1.457,1.457,0,0,1,1.12-1.41v-24.67l-49.7,28.74v25.89Zm-1.89,313.4,48.45-28.02V1786.16l-48.45-28.02-48.46-28.02-19.57,11.32a4.853,4.853,0,0,1,.54,2.25,4.985,4.985,0,0,1-.5,2.18l68.05,39.34a3.924,3.924,0,1,1,3.55,6.16v81.77a1.86,1.86,0,1,1-1.75,3.03l-67.43,38.99a7.718,7.718,0,0,1-6.5,11.27v14.19l23.61,13.65h0Zm48.45,202.07-48.45-28.02-48.46-28.01-48.46,28.01-48.46,28.02V2240.4l60.71,35.1,6.08-3.52a6.969,6.969,0,1,1,13.16-3.2,6.911,6.911,0,0,1-.78,3.2l30.02,17.36,84.64-48.94V2128.32Zm-45.17,2.82a6.365,6.365,0,1,1-6.35,6.37A6.365,6.365,0,0,1,4176.29,2131.14Zm-75.67,55.62a5.49,5.49,0,1,1,5.47-5.49A5.484,5.484,0,0,1,4100.62,2186.76ZM4236.88,1563l34.13,19.73v3.96L4230.03,1563h6.85ZM3570.87,2574.16a0.92,0.92,0,1,1-.92.92A0.924,0.924,0,0,1,3570.87,2574.16Z"
                                  transform="translate(-3441 -1563)"/>
                        </svg>
                    </div>
                </div>

                <div className="container">
                    <div className="about__our-misson wow fadeInLeft">

                        <div className="about__our-misson-text">
                            <div className="icon">
                                <svg width="43" height="35" viewBox="0 0 43 35">
                                    <path id="mission-icon.svg" className="cls-2"
                                          d="M3977,1891.26h-9.41l-1.79-2.7h-2.32a12.115,12.115,0,1,1,0-2.69h2.32l1.79-2.69H3977l-2.69,4.04Zm-25.53-5.39h3.78a4.045,4.045,0,1,0,0,2.69h-3.78A1.345,1.345,0,0,1,3951.47,1885.87Zm0,8.08a6.735,6.735,0,1,1,6.58-8.08h2.72a9.425,9.425,0,1,0,0,2.69h-2.72A6.733,6.733,0,0,1,3951.47,1893.95Zm20.51-8.08h-2.95l-0.89,1.35,0.89,1.34h2.95l-0.9-1.34Zm-20.51-13.46a14.81,14.81,0,1,0,13.42,20.98l2.44,1.12a17.505,17.505,0,1,1,0-14.59l-2.44,1.13A14.814,14.814,0,0,0,3951.47,1872.41Z"
                                          transform="translate(-3934 -1869.72)"/>
                                </svg>
                            </div>
                            <h1 className="title">our mission</h1>
                            <p className="text">Our mission is to care for patients,<br/>families, communities, and one
                                another
                            </p>
                        </div>

                        <div className="about__our-misson-img">
                            <img src="assets/images/jpg/about-img.jpg"/>
                        </div>

                    </div>

                    <div className="about__text wow fadeInRight">
                        <h4>who we are</h4>
                        <h1 className="section-title">Medical center<br/><span>in new york</span></h1>
                        <h2>We offer reasonable pricing health care plans, insurance packages to clients.</h2>
                        <p>IBNSINO Medical Center provide patients with choices to ask for the conducting and analyzing
                            of
                            several lab tests on-site at no cost for prioritized patients or at 70% for people with an
                            insurance.</p>
                        <a href="about.html" className="read-more">read more</a>
                        <div className="about__text-signature">
                            <img src="assets/images/png/signature.png" alt="signature"/>
                            <h4>Richard Jefferson<br/><span>Chief Medical Center</span></h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="other-services" id="services">
                <div className="other-services__bg">
                    <img src="assets/images/jpg/other-services.jpg"/>
                    <div className="icon">
                        <img src="assets/images/png-shapes/other-services-shape.png"/>
                    </div>
                </div>
                <div className="other-services__bg-2"></div>
                <div className="container">
                    <h1 className="section-title">our <span>services</span></h1>
                    <div className="other-services__cards">
                        <div className="card-item">
                            <div className="icon">
                                <svg width="56" height="64.72" viewBox="0 0 56 64.72">
                                    <path id="icon1.svg" className="cls-5"
                                          d="M2033.14,1585.72a3.689,3.689,0,0,1-1.09.16,3.755,3.755,0,0,1-1.1-.16c-27.21-8.32-27.37-42.76-26.77-53.12a3.9,3.9,0,0,1,4.05-3.7,32.136,32.136,0,0,0,21.46-6.93,3.774,3.774,0,0,1,4.71,0,32.179,32.179,0,0,0,21.48,6.93,3.9,3.9,0,0,1,4.04,3.7C2060.52,1542.96,2060.37,1577.4,2033.14,1585.72Zm22.79-52.77a36.266,36.266,0,0,1-23.88-7.7,36.614,36.614,0,0,1-24.03,7.7c-0.4,9.5-.32,41.43,24.09,48.9C2056.31,1574.41,2056.48,1542.69,2055.93,1532.95Zm-17.88,26.63v8.1a2,2,0,0,1-2,2.02h-8a2,2,0,0,1-2-2.02v-8.1h-8a2,2,0,0,1-2-2.02v-8.09a2.012,2.012,0,0,1,2-2.03h8v-8.09a2.01,2.01,0,0,1,2-2.02h8a2.01,2.01,0,0,1,2,2.02v8.09h8a2.012,2.012,0,0,1,2,2.03v8.09a2,2,0,0,1-2,2.02h-8Zm6-8.09h-8a2.01,2.01,0,0,1-2-2.02v-8.09h-4v8.09a2,2,0,0,1-2,2.02h-8v4.05h8a2,2,0,0,1,2,2.02v8.09h4v-8.09a2.01,2.01,0,0,1,2-2.02h8v-4.05Z"
                                          transform="translate(-2004.06 -1521.16)"/>
                                </svg>
                            </div>
                            <h2 className="title">Primary Care Physicia</h2>
                            <h4 className="subtitle">Health Help Centre provives<br/>the following healthcare Services:
                            </h4>
                            <ul className="lists">
                                <li><i className="fa fa-check"></i>Complate Family Health Care</li>
                                <li><i className="fa fa-check"></i>EKG</li>
                                <li><i className="fa fa-check"></i>X-Ray</li>
                                <li><i className="fa fa-check"></i>UltraSound</li>
                                <li><i className="fa fa-check"></i>Acute and Chronic Care</li>
                                <li><i className="fa fa-check"></i>Well Woman’s Exam</li>
                            </ul>
                        </div>

                        <div className="card-item">
                            <div className="icon">
                                <svg width="65" height="65" viewBox="0 0 65 65">
                                    <path id="icon2.svg" className="cls-1"
                                          d="M2461.17,1553.5a1.926,1.926,0,0,1-.7-0.13,2.032,2.032,0,0,1-1.21-2.6,25.678,25.678,0,0,0,1.68-8.81c0-5.08-1.59-16.9-16.25-16.9-4.94,0-6.71,1.72-8.75,3.7a25.126,25.126,0,0,1-2.2,1.97,2.012,2.012,0,0,1-2.48,0,24.825,24.825,0,0,1-2.19-1.95c-2.07-1.99-3.86-3.72-8.76-3.72-14.14,0-16.25,10.59-16.25,16.9a25.841,25.841,0,0,0,1.67,8.8,2.03,2.03,0,1,1-3.81,1.4,29.805,29.805,0,0,1-1.92-10.2c0-13.12,7.59-20.96,20.31-20.96,6.54,0,9.33,2.69,11.58,4.86l0.61,0.58c0.2-.19.4-0.39,0.61-0.59,2.22-2.16,4.99-4.85,11.58-4.85,12.53,0,20.31,8.03,20.31,20.96a29.86,29.86,0,0,1-1.92,10.21A2.043,2.043,0,0,1,2461.17,1553.5Zm-59.14,4.06h14.91l5.57-12.99a1.92,1.92,0,0,1,1.95-1.23,2.033,2.033,0,0,1,1.84,1.39l5.92,17.76,6.43-25.73a2.039,2.039,0,0,1,1.95-1.54h0.02a2.023,2.023,0,0,1,1.96,1.5l5.69,20.84h14.7a2.03,2.03,0,1,1,0,4.06h-16.25a2.025,2.025,0,0,1-1.96-1.49l-4.05-14.85-6.24,24.96a2.036,2.036,0,0,1-1.89,1.54h-0.08a2.043,2.043,0,0,1-1.93-1.39l-6.43-19.31-3.99,9.31a2.032,2.032,0,0,1-1.87,1.23h-16.25A2.03,2.03,0,0,1,2402.03,1557.56Zm13.72,8.83a103.6,103.6,0,0,0,16.75,15.1,104.3,104.3,0,0,0,16.75-15.11,2.031,2.031,0,0,1,3.06,2.67,105.8,105.8,0,0,1-18.68,16.61,2.046,2.046,0,0,1-1.13.34,2.022,2.022,0,0,1-1.13-.34,105.99,105.99,0,0,1-18.68-16.6A2.031,2.031,0,1,1,2415.75,1566.39Z"
                                          transform="translate(-2400 -1521)"/>
                                </svg>
                            </div>
                            <h2 className="title">Immunology and Allergy</h2>
                            <h4 className="subtitle">You should fell your best no matter<br/>the season:</h4>
                            <ul className="lists">
                                <li><i className="fa fa-check"></i>Allergy and Immunology Conditions</li>
                                <li><i className="fa fa-check"></i>Testing for allergy and immunology</li>
                                <li><i className="fa fa-check"></i>Allergy and immunology treatments</li>
                                <li><i className="fa fa-check"></i>Asthma Care</li>
                                <li><i className="fa fa-check"></i>Dermatology</li>
                                <li><i className="fa fa-check"></i>Pediatric Allergy and Immunology</li>
                            </ul>
                        </div>

                        <div className="card-item">
                            <div className="icon">
                                <svg width="65" height="65" viewBox="0 0 65 65">
                                    <path id="icon3.svg" className="cls-5"
                                          d="M2837.02,1571.38c-6.43,3.58-14.11,3.63-22.33.18a15.834,15.834,0,0,0-1.64,11.85,2.031,2.031,0,0,1-1.4,2.51,2.164,2.164,0,0,1-.56.08,2.034,2.034,0,0,1-1.95-1.48c-2.48-8.71,2.43-15.79,3.09-16.68,6.72-10.64,13.65-20.01,18.03-25.7-11.51,5.76-19.47,17.4-23.5,24.54a2.071,2.071,0,0,1-1.68,1.04,1.917,1.917,0,0,1-1.76-.88c-3.44-4.97-6.75-15.87-1.8-25.54,6.59-12.88,24.87-19.71,54.32-20.3a2.312,2.312,0,0,1,1.54.66,1.983,1.983,0,0,1,.52,1.59C2855.04,1549.06,2848.01,1565.25,2837.02,1571.38Zm-31.89-28.23c-3.51,6.86-1.86,14.14-.05,18.39,1.16-1.87,2.53-3.89,4.08-5.97,0-.01-0.01-0.03-0.01-0.04v-11.39a2.03,2.03,0,1,1,4.06,0v6.45c1.27-1.41,2.62-2.81,4.07-4.16v-7.15a2.03,2.03,0,0,1,4.06,0v3.71a40.6,40.6,0,0,1,14.54-7.27,2.03,2.03,0,0,1,2.07,3.26c-0.07.08-3.84,4.66-9.07,11.75l6.29-1.25a2.029,2.029,0,1,1,.79,3.98l-10.16,2.03a1.722,1.722,0,0,1-.39.04c-0.81,1.14-1.64,2.31-2.48,3.52l10.31-1.47a2.031,2.031,0,1,1,.58,4.02l-13.98,2q-1.47,2.19-2.95,4.48c6.85,2.74,12.95,2.66,18.14-.24,9.48-5.29,15.72-19.65,18.56-42.72C2827.48,1525.97,2810.74,1532.19,2805.13,1543.15Zm51.55,15.44c1.23,2.43,7.33,14.74,7.33,18.7a9.151,9.151,0,0,1-18.28,0c0-3.96,6.1-16.27,7.33-18.7A2.108,2.108,0,0,1,2856.68,1558.59Zm-1.81,23.33a4.872,4.872,0,0,0,5.08-4.63c0-1.76-2.58-7.87-5.08-13.14-2.5,5.27-5.08,11.38-5.08,13.14A4.872,4.872,0,0,0,2854.87,1581.92Z"
                                          transform="translate(-2799 -1521)"/>
                                </svg>
                            </div>
                            <h2 className="title">Holistic Wellness</h2>
                            <h4 className="subtitle">A lifestyle of holistic wellness rewards<br/>you with enhanced
                                health:</h4>
                            <ul className="lists">
                                <li><i className="fa fa-check"></i>Weight loss</li>
                                <li><i className="fa fa-check"></i>Therapeutic Medical Massage</li>
                                <li><i className="fa fa-check"></i>Holistic Skin Care</li>
                                <li><i className="fa fa-check"></i>K-Laser Pain Management</li>
                                <li><i className="fa fa-check"></i>Ayurveda & Detoxification</li>
                                <li><i className="fa fa-check"></i>Hormone Replacement Therapy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq" id="faq">
                <div className="faq__content">
                    <h1 className="section-title">Questions <span>and answers</span></h1>

                    <Accordion adClass="accordion-rounded">

                        <Card title="1.How do I post my own article?" adClass="accardion__item wow ">
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Officia ipsum, voluptatum. Pariatur expedita facere fugit, doloribus reiciendis
                                repellendus
                                quaerat? Nihil ad eos molestias numquam quas eveniet sit suscipit, nostrum vel ipsa
                                voluptate nobis facere in quos.
                            </p>
                        </Card>

                        <Card title="2.How do I get a copy of my records to another
                                provider?" adClass="accardion__item wow ">
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Officia ipsum, voluptatum. Pariatur expedita facere fugit, doloribus reiciendis
                                repellendus
                                quaerat? Nihil ad eos molestias numquam quas eveniet sit suscipit, nostrum vel ipsa
                                voluptate nobis facere in quos.
                            </p>
                        </Card>

                        <Card title="3.Is there a charge for copies of my medical
                                record?" adClass="accardion__item wow ">
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Officia ipsum, voluptatum. Pariatur expedita facere fugit, doloribus reiciendis
                                repellendus
                                quaerat? Nihil ad eos molestias numquam quas eveniet sit suscipit, nostrum vel ipsa
                                voluptate nobis facere in quos.
                            </p>
                        </Card>

                        <Card title="4.How do I assure that my person I designate has
                                access to my medical record?" adClass="accardion__item wow ">
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Officia ipsum, voluptatum. Pariatur expedita facere fugit, doloribus reiciendis
                                repellendus
                                quaerat? Nihil ad eos molestias numquam quas eveniet sit suscipit, nostrum vel ipsa
                                voluptate nobis facere in quos.
                            </p>
                        </Card>
                    </Accordion>
                </div>
                <div className="faq__img">
                    <img src="assets/images/jpg/faq.jpg"/>
                </div>
            </section>

            <section className="latest-news">
                <div className="latest-news__bg">
                    <div className="icon">
                        <img src="assets/images/png-shapes/latest-news__right-bottom-shape.png"/>
                    </div>
                </div>
                <div className="container">
                    <h1 className="section-title">latest <span>articles</span></h1>

                    <OwlCarousel adClass="owl-simple" carouselOptions={mainSlider2}>
                        {
                            articles.map((article, index) =>
                                <Link to={`${process.env.PUBLIC_URL}/blog/single/${article.id}`} key={index}
                                      className={"latest-news__item"}>
                                    <div className="inner-block">
                                        <div className="img">
                                            {/* <img src="assets/images/jpg/latest-news1.jpg"/>*/}
                                            <img
                                                src={`${process.env.REACT_APP_API_URL}/uploads/posts/` + article.fileName}
                                                alt="product back"/>
                                            <h1 className="date">{article.createdAt}</h1>
                                        </div>
                                        <h4 className="title">{article.titleFr}</h4>
                                        <span className="read-more-2">read more</span>
                                    </div>
                                </Link>
                            )}
                    </OwlCarousel>
                </div>
            </section>

        </>
    )
}

function mapStateToProps(state, props) {
    return {
        articles: state.blog.articles ? state.blog.articles : [],
    }
}

export default connect(mapStateToProps, {getArticles})(IndexSixteen);
