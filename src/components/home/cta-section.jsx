import React from 'react';

export default () => (
    <div
        className="cta-newsletter text-center pb-7"
        // style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/bg-2.jpg)`}}
    >
        <div className="container">
            <span className="cta-icon"><i className="icon-envelope"></i></span>
            <h3 className="title">Subscribe for Our Newsletter</h3>
            {/*<p className="title-desc">and receive <span className="text-primary">$20 coupon</span> for first shopping</p>*/}
            
            <form action="#">
                <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" aria-describedby="newsletter-btn" required/>
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="submit" id="newsletter-btn"><span>SUBSCRIBE</span><i className="icon-long-arrow-right"></i></button>
                    </div>
                </div>
            </form>

            <p className="newsletter-desc">Your personal details are safe with us.</p>
        </div>
    </div>
)