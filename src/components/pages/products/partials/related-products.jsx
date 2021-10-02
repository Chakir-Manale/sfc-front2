import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';

import {addToCart, addToCompare, toggleWishlist} from '../../../../actions';

import ProductSix from '../../../features/product/product-six';
import OwlCarousel from '../../../features/owl-carousel';

import {mainSlider8} from '../../../settings';
import {getSimilarProducts} from "../../../../actions/variantActions";

function RelatedProducts(props) {
    const {products, addToCart, toggleWishlist, addToCompare, showQuickViewModal} = props;

    let currentProduct = props.currentProduct;
    let similar_products = props.similarProducts;
    const dispatch = useDispatch();


    useEffect(() => {
        if (currentProduct.product) {
            if (currentProduct.product.categories && currentProduct.product.categories.length > 0)
                dispatch(getSimilarProducts(currentProduct.product.categories[0].id));
        }
    }, [currentProduct])

    if (!currentProduct.id) {
        return ""
    }
    return (
        <OwlCarousel
            adClass="owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1"
            carouselOptions={mainSlider8} carouselId="relatedProducts">
            {
                similar_products &&
                similar_products.map((item, index) => (
                    <ProductSix
                        product={item}
                        onAddToCart={addToCart}
                        onToggleWishlist={toggleWishlist}
                        onAddToCompare={addToCompare}
                        showQuickView={showQuickViewModal}
                        key={`product-${index}`}
                    />
                ))
            }
        </OwlCarousel>
    );
}

const mapStateToProps = (state) => ({
    currentProduct: state.variants.variantDetail ? state.variants.variantDetail : {},
    products: state.data.products,
    similarProducts: state.variants.similarProducts ? state.variants.similarProducts : [],

})

export default connect(mapStateToProps, {addToCart, addToCompare, toggleWishlist, getSimilarProducts})(RelatedProducts);