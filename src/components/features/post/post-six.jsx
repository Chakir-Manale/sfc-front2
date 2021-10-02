import React from 'react';
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import OwlCarousel from '../owl-carousel';

function PostSix(props) {
    const {post, isIsotope = false} = props;

    if (post) {
        let date = new Date(post.date);
        let options = {year: "numeric", month: "short", day: "2-digit", timeZone: "UTC"};

        return (
            <>
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
                    <div className="container container_left-sidebar">
                        <div className="article">
                            <div className="single-card">
                                <div className="img">
                                    <img src="assets/images/jpg/our-numbers-bg.jpg"/>
                                </div>
                                <span className="date">Now 28 2019</span>
                                <span className="comments"><span>3</span> comments</span>
                                <h1 className="title">How to create a website with Wordpress and Elementor</h1>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum. Sed
                                    ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo.
                                    <br/><br/>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                    porro
                                    quisquam
                                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                    quia non
                                    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem.
                                </p>
                                <div className="blog">
                                    <div className="icon">
                                        <img src="assets/images/png/quotation.png"/>
                                    </div>
                                    <div className="content">
                                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do
                                            eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis
                                            nostrud exercitation.</p>
                                        <h4 className="author">- Kadirov Sardor</h4>
                                    </div>
                                </div>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>

                                <div className="share">
                                    <h4>Social share:</h4>
                                    <a href="#" title="facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="#" title="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" title="vk"><i className="fa fa-vk"></i></a>
                                    <a href="#" title="instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="#" title="pinterest"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                                <div className="single-card__comments">
                                    <h1 className="title">Comments</h1>
                                    <div className="single-card__comments-items">
                                        <div className="item">
                                            <div className="img">
                                                <img src="assets/images/jpg/comment-man.jpg"/>
                                            </div>
                                            <div className="content">
                                                <div className="date-reply">
                                                    <span className="date">Nov 18, 2019</span>
                                                    <a href="#" className="reply"><i
                                                        className="fa fa-reply"></i>Reply</a>
                                                </div>
                                                <h3 className="name">John Roberts</h3>
                                                <p className="text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="img">
                                                <img src="assets/images/jpg/comment-woman.jpg"/>
                                            </div>
                                            <div className="content">
                                                <div className="date-reply">
                                                    <span className="date">Nov 18, 2019</span>
                                                    <a href="#" className="reply">
                                                        <i className="fa fa-reply"></i>Reply</a>
                                                </div>
                                                <h3 className="name">Julia Anderson</h3>
                                                <p className="text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form className="single-card__post-comment">
                                    <textarea placeholder="Type your comments.."></textarea>
                                    <input type="text" placeholder="Name" required/>
                                    <input type="email" placeholder="Email" required/>
                                    <button className="btn btn_pink">post comment</button>
                                    <label>* Personal data will be encrypted</label>
                                </form>
                                <div className="also-like">
                                    <h1 className="title">You may also like</h1>
                                    <a href="#" className="item">
                                        <div className="img">
                                            <img src="assets/images/jpg/latest-news1.jpg"/>
                                            <span className="date">Now 28. 2019</span>
                                        </div>
                                        <h4 className="title">Improvements in Technology</h4>
                                        <p className="text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        </p>
                                        <span className="read-more-2">read more</span>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="img">
                                            <img src="assets/images/jpg/latest-news2.jpg"/>
                                            <span className="date">Now 28. 2019</span>
                                        </div>
                                        <h4 className="title">Improvements in Technology</h4>
                                        <p className="text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        </p>
                                        <span className="read-more-2">read more</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        );
    } else {
        return '';
    }
}

export default React.memo(PostSix);