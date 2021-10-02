import React, { useEffect } from 'react';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostSix from '../../features/post/post-six';
import Pagination from '../../features/pagination';

import { isotopeLoad } from '../../../utils';

import posts from '../../../mock_data/posts';

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
                <h1 className="section-title">Latest <span>news</span></h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Latest News</li>
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
                    <div class="img">
                        <img src="assets/images/jpg/latest-news4.jpg"/>
                        <span class="date">Now 28. 2019</span>
                    </div>
                    <h4 class="title">Improvements in Technology</h4>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span class="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" class="item">
                    <div class="img">
                        <img src="assets/images/jpg/latest-news5.jpg"/>
                        <span class="date">Now 28. 2019</span>
                    </div>
                    <h4 class="title">Improvements in Technology</h4>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span class="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" class="item">
                    <div class="img">
                        <img src="assets/images/jpg/latest-news6.jpg"/>
                        <span class="date">Now 28. 2019</span>
                    </div>
                    <h4 class="title">Improvements in Technology</h4>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span class="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" class="item">
                    <div class="img">
                        <img src="assets/images/jpg/latest-news7.jpg"/>
                        <span class="date">Now 28. 2019</span>
                    </div>
                    <h4 class="title">Improvements in Technology</h4>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span class="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" class="item">
                    <div class="img">
                        <img src="assets/images/jpg/latest-news8.jpg"/>
                        <span class="date">Now 28. 2019</span>
                    </div>
                    <h4 class="title">Improvements in Technology</h4>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span class="read-more-2">read more</span>
                </a>
                <a href="blog-details_left.html" class="item">
                    <div class="img">
                        <img src="assets/images/jpg/latest-news9.jpg"/>
                        <span class="date">Now 28. 2019</span>
                    </div>
                    <h4 class="title">Improvements in Technology</h4>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <span class="read-more-2">read more</span>
                </a>
                <ul class="my-pagination">
                    <li class="disabled">
                        <span class="fa fa-angle-left"></span>
                    </li>
                    <li class="active">
                        <a href="#">01</a>
                    </li>
                    <li class="">
                        <a href="#">02</a>
                    </li>
                    <li class="">
                        <a href="#">03</a>
                    </li>
                    <li class="dotted">
                        <p>...</p>
                    </li>
                    <li class="">
                        <a href="#">09</a>
                    </li>
                    <li class="">
                        <span class="fa fa-angle-right"></span>
                    </li>
                </ul>
            </div>
        </section>

        </>
    );
}