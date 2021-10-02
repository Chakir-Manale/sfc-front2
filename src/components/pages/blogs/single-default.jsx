import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Helmet} from 'react-helmet';
//import {showModal} from '../../../actions';
import posts from '../../../mock_data/posts';
import {SlateEditorPreview} from "../../common/partials/SlateEditor";
import {getPostDetail} from "../../../actions/blogActions";

function SingleDefault(props) {
    const dispatch = useDispatch();
    const {showModal} = props;
    const postId = props.match.params.id;
    let nextId, prevId;
    //const post = posts.filter(item => item.id === parseInt(postId))[0];

    const post = props.currentPost;
    const nextPost = posts.filter(item => item.id > parseInt(postId))[0];
    const prevPost = posts.filter(item => item.id < parseInt(postId))[0];

    if (nextPost) {
        nextId = parseInt(postId) + 1;
    } else {
        nextId = parseInt(postId);
    }

    if (prevPost) {
        prevId = parseInt(postId) - 1;
    } else {
        prevId = parseInt(postId);
    }

    if (!post) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
    }

    let date = new Date(post.createdAt);
    let options = {year: "numeric", month: "short", day: "numeric", timeZone: "UTC"};

    const showVideoModal = (e) => {
        showModal('video');
        e.preventDefault();
    }

    function toTop() {
        window.scroll({
            top: 0
        })
    }

    useEffect(() => {
        dispatch(getPostDetail(postId));
    }, [postId, dispatch])

    console.log(post);
    return (
        <>
            <Helmet>
                <title>SFC | Space For Change</title>
            </Helmet>

            <h1 className="d-none">SFC - Space For Change</h1>
            <header className="header-bottom-4">
                <img src="assets/images/banner/banner4.jpg"/>
                <div className="header-bottom-4__bg">
                    <div className="icon">
                        <img src="assets/images/banner/banner-shape.png"/>
                    </div>
                </div>
                <div className="container">
                    <h1 className="section-title">Latest <span>articles</span></h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item">Latest Articles</li>
                        <li className="breadcrumb-item active">{post.titleFr}</li>
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
                                <img
                                    src={`${process.env.REACT_APP_API_URL}/uploads/posts/` + post.fileName}
                                    alt="product back"/>
                            </div>
                            <span className="date">{date.toLocaleDateString('en-US', options)}</span>
                            <span className="comments"><span>2</span> comments</span>
                            <h1 className="title">
                                {post.titleFr}
                            </h1>
                            {
                                post && post.createdBy ?
                                    <span className="entry-author">
                                        by
                                        {` ${post.createdBy.firstName} ${post.createdBy.lastName}`}
                                    </span>
                                    :
                                    ''
                            }

                            {
                                post && post.contentFr &&
                                <SlateEditorPreview
                                    value={post.contentFr}
                                />
                            }

                            <div className="share">
                                <h4>Social share:</h4>
                                <a href="#" title="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" title="twitter"><i className="fa fa-twitter"></i></a>
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
                                            </div>
                                            <h3 className="name">John Roberts</h3>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam.
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
                                            </div>
                                            <h3 className="name">Julia Anderson</h3>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam.
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

//export default connect(null, {showModal})(SingleDefault);

function mapStateToProps(state, props) {
    return {
        currentPost: state.blog.postDetail ? state.blog.postDetail : {},
    }
}

export default connect(mapStateToProps)(SingleDefault);