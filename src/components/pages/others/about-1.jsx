import React, {useEffect} from 'react';

function AboutOne() {
    useEffect(() => {
        document.querySelector(".footer-middle") && document.querySelector(".footer-middle").classList.add("border-0");
    }, [])

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
                        <h1 className="section-title">About <span>us</span></h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">About Us</li>
                        </ol>
                    </div>
            </header>
            <section className="about-4" id="about">
                <div className="latest-news__bg">
                    <div className="icon">
                        <img src="assets/images/png-shapes/latest-news__right-bottom-shape.png"/>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="content-right">
                            <h4>who we are</h4>
                            <h1 className="section-title">Goal Diggers<br/><span>SPACE FOR CHANGE</span></h1>
                            <h2>Our goal is to help bring to light regions where marginalized populations are facing a
                                higher
                                burden from environmental hazards, lack of access to resources and opportunities, and
                                design
                                solutions to bring about equitable outcomes.</h2>
                            <p>
                                SFC is a learning network of 6 members, from Oujda,Morocco.
                                We share scientific ideas, opinions, stories, articles about Ecology and Eco-linguistics.
                                Our first aim is to develop materials(stories, articles, thoughts,articles…etc) which consider humans not only as part of society,
                                but also as part of the larger ecosystems that life depends on.
                                The second aim is to encourage people to spread environmental awareness in order to achieve ecological stability and social justice.
                                Join our community and share your own articles & ideas!.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-numbers">
                <div className="our-numbers__bg"></div>
                <div className="container">
                    <div className="our-numbers__items">
                        <div className="item">
                            <h1><span className="counter">12</span>+</h1>
                            <h4>Scientific Articles</h4>
                        </div>
                        <div className="item">
                            <h1><span className="counter">10</span>+</h1>
                            <h4>Stories</h4>
                        </div>
                        <div className="item">
                            <h1><span className="counter">30</span>+</h1>
                            <h4>Ecological events & posts</h4>
                        </div>
                        <div className="item">
                            <h1><span className="counter">2</span>+</h1>
                            <h4>Years of Experience</h4>
                        </div>

                    </div>
                    <div className="our-numbers__img wow fadeInRight" data-wow-duration="1s">
                        <img src="assets/images/jpg/our-numbers.jpg"/>
                    </div>
                </div>
            </section>
            <section className="medical-center-2">
                <div className="container">
                    <div className="img">
                        <img src="assets/images/jpg/medical-center-2.jpg"/>
                    </div>
                    <div className="content">
                        <h1 className="section-title">we are the best<br/><span>education platform</span></h1>
                        <p className="text">Led by the joint care coordinator, our team has been hand-picked for their
                            positive
                            attitudes, motivational skills and a desire to provide outstanding service</p>
                        <ul className="list">
                            <li><i className="fa fa-check"></i>Free Access To rich scientific articles</li>
                            <li><i className="fa fa-check"></i>Free Stories</li>
                            <li><i className="fa fa-check"></i>24×7 Q/A Services</li>
                            <li><i className="fa fa-check"></i>Online Service</li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    )
}

export default React.memo(AboutOne);