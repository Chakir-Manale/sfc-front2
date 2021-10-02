import React, {useEffect} from 'react';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import {Helmet} from 'react-helmet';
import {isotopeLoad} from '../../../utils';
import {Link} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {getArticles} from "../../../actions/blogActions";

function Grid2Cols(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        isotopeLoad(isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter');
    });

    let articles = props.articles;
    useEffect(() => {
        getArticles();
    }, [dispatch]);


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
                    {
                        articles.map((article, index) =>
                            <Link to={`${process.env.PUBLIC_URL}/blog/single/${article.id}`} key={index}
                                  className={"latest-news__item"}>
                                <div className="inner-block">
                                    <div className="img">
                                        <img
                                            src={`${process.env.REACT_APP_API_URL}/uploads/posts/` + article.fileName}
                                            alt="product back"/>
                                        <span className="date">{article.createdAt}</span>
                                    </div>
                                    <h4 className="title">{article.titleFr}</h4>
                                    <span className="read-more-2">read more</span>
                                </div>
                            </Link>
                        )}
                </div>
            </section>
        </>
    );
}

function mapStateToProps(state, props) {
    return {
        articles: state.blog.articles ? state.blog.articles : [],
    }
}

export default connect(mapStateToProps, {getArticles})(Grid2Cols);
