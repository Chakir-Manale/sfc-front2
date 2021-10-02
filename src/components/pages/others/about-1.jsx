import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {T} from "../../common/partials/trans";

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
// import ProfileOne from '../../features/profile/profile-one';
// import OwlCarousels from '../../features/owl-carousel';
// import Testimonial from '../../features/testimonial';

// import Utils
// import {mainSlider5} from '../../settings';

// import _data from '../../../mock_data/data.json';

function AboutOne() {
    useEffect(() => {
        document.querySelector(".footer-middle") && document.querySelector(".footer-middle").classList.add("border-0");
    }, [])

    return (
        <div className="main">
            <Helmet>
                <title>Flow</title>
            </Helmet>

            <h1 className="d-none">Flow</h1>

            <Breadcrumb title="AboutUs" parent1={["Pages", "pages/about"]} adClass="border-0 mb-0"/>

            <div className="container">
                <div className="page-header page-header-big text-center"
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about-header-bg.jpg)`}}>
                    <h1 className="page-title text-white">
                        <T id={"About_Us"}/>
                        <span className="text-white">
                            <T id={"Who_We_Are"}/>
                        </span></h1>
                </div>
            </div>

            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <h2 className="title"><T id={"Our_Goal"}/></h2>
                            <p>
                                Flow vous garantit des produits naturels,sans matières synthetiques,des produits
                                vraiment sains et
                                éthiques aux extraits de plantes et de fleurs,fabriqués de manière artisanale dans le
                                respect des
                                normes et des bonnes pratiques.
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="title"><T id={"Our_Society"}/></h2>
                            <p>
                                L’entreprise naît en 2021, fondée par Houda Affani,une entrepreneure passionnée,engagée
                                et avec
                                de hautes valeurs humaines.Le logo de l’entreprise représente une fleur au sens relatif
                                du
                                flore,l'aurore,la beauté,l'odorat,la logique et l’espérance d'une future naissance d'un
                                fruit ou d’une
                                fleur en prenant soin d'elle tout au long de sa vie et c'est le cœur de l’activité de
                                l’entreprise.
                            </p>
                        </div>
                    </div>

                    <div className="mb-5"/>
                </div>

                <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-3 mb-lg-0">
                                <h2 className="title"><T id={"Who_We_Are"}/></h2>
                                <p className="lead text-primary mb-3">
                                    Flow s'est lancé dans la fabrication et la commercialisation des produits
                                    100%naturels en créant le
                                    site www.naturalflow.com sur lequel les produits sont exposés et proposés aux
                                    consommateurs,tant
                                    que pour ceux qui adorent la beauté et le bien-être au naturel en utilisant des
                                    produits nobles,
                                    sains,éthiques,raisonnables et responsables pour la peau,les cheveux et la santé en
                                    général;que pour
                                    les personnes qui consomment la cosmétique conventionnelle et veulent découvrir et
                                    opter plutôt
                                    des produits naturels,fabriqués et sélectionnés avec la plus grande attention et
                                    avec amour et
                                    passion. Sans oublier toutes les personnes qui ont une sensibilité à l’écologie,
                                    l’environnement et la
                                    nature ;Cette merveilleuse nature que plus on s’émerveille devant elle,plus elle
                                    nous offre ses
                                    merveilles.Elle peut tout et fait tout.Flow est pour tout le monde. </p>

                                {/*<Link to={`${process.env.PUBLIC_URL}/blog/classic`}*/}
                                {/*      className="btn btn-sm btn-minwidth btn-outline-primary-2">*/}
                                {/*    <span>VIEW OUR NEWS</span>*/}
                                {/*    <i className="icon-long-arrow-right"></i>*/}
                                {/*</Link>*/}
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-images">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/about/img-1.jpg`} alt=""
                                         className="about-img-front"/>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/about/img-2.jpg`} alt=""
                                         className="about-img-back"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-lg-5">*/}
                {/*            <div className="brands-text">*/}
                {/*                <h2 className="title">The world's premium design brands in one destination.</h2>*/}
                {/*                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,*/}
                {/*                    dapibus id, mattis vel, nis</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-lg-7">*/}
                {/*            <div className="brands-display">*/}
                {/*                <div className="row justify-content-center">*/}
                {/*                    {_data.brands.default.map((brand, index) =>*/}
                {/*                        <div className="col-6 col-sm-4" key={index}>*/}
                {/*                            <Link to="#" className="brand">*/}
                {/*                                <img src={process.env.PUBLIC_URL + '/' + brand.image} alt="Brand Name"/>*/}
                {/*                            </Link>*/}
                {/*                        </div>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <hr className="mt-4 mb-6"/>*/}

                {/*    <h2 className="title text-center mb-4">Meet Our Team</h2>*/}

                {/*    <div className="row">*/}
                {/*        <div className="col-md-4">*/}
                {/*            <ProfileOne image={`assets/images/team/member-1.jpg`} name="Samanta Grey"*/}
                {/*                        title="Founder & CEO"*/}
                {/*                        content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc."/>*/}
                {/*        </div>*/}
                {/*        <div className="col-md-4">*/}
                {/*            <ProfileOne image={`assets/images/team/member-2.jpg`} name="Bruce Sutton"*/}
                {/*                        title="Sales & Marketing Manager"*/}
                {/*                        content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc."/>*/}
                {/*        </div>*/}
                {/*        <div className="col-md-4">*/}
                {/*            <ProfileOne image={`assets/images/team/member-3.jpg`} name="Janet Joy"*/}
                {/*                        title="Product Manager"*/}
                {/*                        content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc."/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="mb-2"></div>

                {/*<div className="about-testimonials bg-light-2 pt-6 pb-6">*/}
                {/*    <div className="container">*/}
                {/*        <h2 className="title text-center mb-3">What Customer Say About Us</h2>*/}

                {/*        <OwlCarousels adClass="owl-simple owl-testimonials-photo" carouselOptions={mainSlider5}>*/}
                {/*            <Testimonial image={`assets/images/testimonials/user-1.jpg`}*/}
                {/*                         content="“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna. <br/>In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"*/}
                {/*                         name="Jenson Gregory" job="Customer"/>*/}

                {/*            <Testimonial image={`assets/images/testimonials/user-2.jpg`}*/}
                {/*                         content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”"*/}
                {/*                         name="Victoria Ventura" job="Customer"/>*/}
                {/*        </OwlCarousels>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default React.memo(AboutOne);