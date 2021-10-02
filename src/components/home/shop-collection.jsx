import React from 'react';
import {connect} from 'react-redux';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

import {addToCart, toggleWishlist, showQuickViewModal, addToCompare} from '../../actions';

import {shopSlider} from '../settings';
import posts from "../../mock_data/posts.json";
import {T} from "../common/partials/trans";
import {Link} from "react-router-dom";

function ShopCollection(props) {
    const {addToCart, toggleWishlist, addToCompare, showQuickViewModal} = props;

    // let products = props.products;
    // let products = props.products;
    let variants = props.variants;
    return (
        <>
            <OwlCarousel adClass="owl-simple" carouselOptions={shopSlider}>
                {/* products.slice( 40, 45 ).map( ( item, index ) =>
                <ProductNine product={ item }
                    key={ index }
                    onAddToCart={ addToCart }
                    onToggleWishlist={ toggleWishlist }
                    onAddToCompare={ addToCompare }
                    showQuickView={ showQuickViewModal } />
            ) */}
                {
                    variants.slice(0, 20).map((item, index) =>
                        <ProductNine product={item}
                                     key={index}
                                     onAddToCart={addToCart}
                                     onToggleWishlist={toggleWishlist}
                                     onAddToCompare={addToCompare}
                                     showQuickView={showQuickViewModal}/>
                    )}
            </OwlCarousel>
            <button className="btn btn-outline-darker btn-load-more mt-4 pull-right">
                <Link to={`${process.env.PUBLIC_URL}/shop`} className="sf-with-ul" id="navspan">
                    <i className={"fa fa-plus-circle pr-1"}/> Plus de produits
                </Link>
            </button>
        </>
    )
}

function mapStateToProps(state, props) {
    return {
        // products: state.data.products ? state.data.products : [],
        variants: state.variants.variants ? state.variants.variants : [],
        // products: state.products.products ? state.products.products : []
    }
}

export default connect(mapStateToProps, {addToCart, toggleWishlist, showQuickViewModal, addToCompare})(ShopCollection);