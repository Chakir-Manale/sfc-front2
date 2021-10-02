import React, {useEffect} from 'react';

function Services() {
    useEffect(() => {
        document.querySelector(".footer-middle") && document.querySelector(".footer-middle").classList.add("border-0");
    }, [])

    return (
        <>
            <header className="header-bottom-4">
                <img src="assets/images/banner/banner5.jpg"/>
                <div className="header-bottom-4__bg">
                    <div className="icon">
                        <img src="assets/images/banner/banner-shape.png"/>
                    </div>
                </div>
                <div className="container">
                    <h1 className="section-title">our <span>services</span></h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Our services</li>
                    </ol>
                </div>
            </header>
            <section className="departments-3 main-blog">
                <div className="main-blog__bg">
                    <div className="icon">
                        <img src="assets/images/png-shapes/form-shape.png"/>
                    </div>
                    <div className="icon">
                        <img src="assets/images/png-shapes/specialists__left-bottom-shape.png"/>
                    </div>
                </div>
                <div className="container">
                    <div className="departments-3__items">
                        <div className="item-icon">
                            <div className="img">
                                <img src="assets/images/jpg/departments-3.jpg"/>
                                <div className="icon">
                                    <img src="assets/images/icons/diagnostics-white.png"/>
                                </div>
                            </div>
                            <h1 className="title">Ecology</h1>
                            <p className="text"></p>
                        </div>
                        <div className="item-icon">
                            <div className="img">
                                <img src="assets/images/jpg/departments-3-2.jpg"/>
                                <div className="icon">
                                    <img src="assets/images/icons/cardiology-white.png"/>
                                </div>
                            </div>
                            <h1 className="title"> Eco-linguistics</h1>
                            <p className="text"></p>
                        </div>
                        <div className="item-icon">
                            <div className="img">
                                <img src="assets/images/jpg/departments-3-3.jpg"/>
                                <div className="icon">
                                    <img src="assets/images/icons/dental-white.png"/>
                                </div>
                            </div>
                            <h1 className="title">Stories</h1>
                            <p className="text"></p>
                        </div>
                        <div className="item-icon">
                            <div className="img">
                                <img src="assets/images/jpg/departments-3-4.jpg"/>
                                <div className="icon">
                                    <img src="assets/images/icons/ophtalmology-white.png"/>
                                </div>
                            </div>
                            <h1 className="title">Articles</h1>
                            <p className="text"></p>
                        </div>
                        <div className="item-icon">
                            <div className="img">
                                <img src="assets/images/jpg/departments-3-5.jpg"/>
                                <div className="icon">
                                    <img src="assets/images/icons/pulmonary-white.png"/>
                                </div>
                            </div>
                            <h1 className="title">Animations</h1>
                            <p className="text"></p>
                        </div>
                        <div className="item-icon">
                            <div className="img">
                                <img src="assets/images/jpg/departments-3-6.jpg"/>
                                <div className="icon">
                                    <img src="assets/images/icons/urology-white.png"/>
                                </div>
                            </div>
                            <h1 className="title">Events</h1>
                            <p className="text"></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(Services);