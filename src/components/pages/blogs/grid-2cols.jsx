import React, { useEffect } from 'react';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';
import { isotopeLoad } from '../../../utils';

export default function Grid2Cols() {
    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    } )

    return (
        <>
            <Helmet>
                <title>SFC | Blog</title>
            </Helmet>

            <h1 className="d-none">SFC - Blog</h1>

        <header className="header-bottom-4">
            <img src="assets/images/banner/banner4.jpg"/>
            <div className="header-bottom-4__bg">
                <div className="icon">
                    <img src="assets/images/banner/banner-shape.png"/>
                </div>
            </div>
            <div className="container">
                <h1 className="section-title">Latest <span>Articles</span></h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">Latest articles</li>
                </ol>
            </div>
        </header>
        
        <section className="latest-news-4 main-blog">
            <div className="main-blog__bg">
                <div className="icon">
                    <img src="assets/images/png-shapes/form-shape.png"/>
                </div>
                <div className="icon">
                    <img src="assets/images/png-shapes/specialists__left-bottom-shape.png"/>
                </div>
            </div>
            <div className="container">
                <a href="blog-details_left.html" className="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news1.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" className="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news2.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" className="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news3.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" class="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news4.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" className="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news5.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" className="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news6.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" className="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news7.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" className="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news8.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" className="item">
                    <div className="img">
                        <img src="assets/images/jpg/latest-news9.jpg"/>
                        <span className="date">Now 28. 2019</span>
                    </div>
                    <h4 className="title">Improvements in Technology</h4>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span className="read-more-2">read more</span>
                </a>
                <ul className="my-pagination">
                    <li className="disabled">
                        <span className="fa fa-angle-left"></span>
                    </li>
                    <li className="active">
                        <a href="#">01</a>
                    </li>
                    <li className="">
                        <a href="#">02</a>
                    </li>
                    <li className="">
                        <a href="#">03</a>
                    </li>
                    <li className="dotted">
                        <p>...</p>
                    </li>
                    <li className="">
                        <a href="#">09</a>
                    </li>
                    <li className="">
                        <span className="fa fa-angle-right"></span>
                    </li>
                </ul>
            </div>
        </section>

        </>
    );
}