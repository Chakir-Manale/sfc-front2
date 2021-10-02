import React, {useEffect} from 'react';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';

import ProductNine from '../features/product/product-nine';
import { productSlider1 } from '../settings';

// import Actions & Services & data
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

import { getProductsByCategory } from '../../services';
import { connect } from 'react-redux';

function ProductCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal, category } = props;

    let products = props.products;
    let variants = props.variants;

    products = getProductsByCategory( products.slice( 35, 59 ), category );

    return (
        <div className="row cat-banner-row clothing">
            <div className="col-xl-9 col-xxl-8">
                <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider1 }>
                    {
                        props.index == 1 &&
                        variants.variants.map( ( item, index ) =>
                            <ProductNine product={ item }
                                key={ category + '/' + index }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                onAddToCompare={ addToCompare }
                                // showQuickView={ showQuickViewModal }
                            />
                        )
                    }
                    {/*// { props.index == 1 &&*/}
                    {/*//     variants.variantsById1.map( ( item, index ) =>*/}
                    {/*//         <ProductNine product={ item }*/}
                    {/*//             key={ category + '/' + index }*/}
                    {/*//             onAddToCart={ addToCart }*/}
                    {/*//             onToggleWishlist={ toggleWishlist }*/}
                    {/*//             onAddToCompare={ addToCompare }*/}
                    {/*//             showQuickView={ showQuickViewModal } />*/}
                    {/*//     )*/}
                    {/*// }*/}
                    {/*// { props.index == 2 &&*/}
                    {/*//     variants.variantsById2.map( ( item, index ) =>*/}
                    {/*//         <ProductNine product={ item }*/}
                    {/*//             key={ category + '/' + index }*/}
                    {/*//             onAddToCart={ addToCart }*/}
                    {/*//             onToggleWishlist={ toggleWishlist }*/}
                    {/*//             onAddToCompare={ addToCompare }*/}
                    {/*//             showQuickView={ showQuickViewModal } />*/}
                    {/*//     )*/}
                    {/*// }*/}
                    {/*// { props.index == 3 &&*/}
                    {/*//     variants.variantsById3.map( ( item, index ) =>*/}
                    {/*//         <ProductNine product={ item }*/}
                    {/*//             key={ category + '/' + index }*/}
                    {/*//             onAddToCart={ addToCart }*/}
                    {/*//             onToggleWishlist={ toggleWishlist }*/}
                    {/*//             onAddToCompare={ addToCompare }*/}
                    {/*//             showQuickView={ showQuickViewModal } />*/}
                    {/*//     )*/}
                    {/*// }*/}
                    {/*// { props.index == 4 &&*/}
                    {/*//     variants.variantsById4.map( ( item, index ) =>*/}
                    {/*//         <ProductNine product={ item }*/}
                    {/*//             key={ category + '/' + index }*/}
                    {/*//             onAddToCart={ addToCart }*/}
                    {/*//             onToggleWishlist={ toggleWishlist }*/}
                    {/*//             onAddToCompare={ addToCompare }*/}
                    {/*//             showQuickView={ showQuickViewModal } />*/}
                    {/*//     )*/}
                    {/*// }*/}
                </OwlCarousel>
            </div>
        </div>
    )
}

export const mapStateToProps = ( state, props ) => {
    return {
        variants: state.variants ? state.variants : [],
        products: state.data.products ? state.data.products : []
    }
}

export default ( connect )( mapStateToProps, {  addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( ProductCollection );