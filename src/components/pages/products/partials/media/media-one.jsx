import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Magnifier} from "react-image-magnifiers";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import {productGallery} from '../../../../../utils';
import {getVariantDetail} from "../../../../../actions/variantActions";

function MediaOne(props) {
    const {product, adClass = "product-gallery-vertical"} = props;
    const dispatch = useDispatch();
    // if ( !product ) {
    //     window.location = process.env.PUBLIC_URL + "pages/404";
    // }

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setStatus] = useState(false);

    let currentProduct = props.currentProduct;

    useEffect(() => {
        dispatch(getVariantDetail(props.id));
    }, [props.id])

    const bigImages = currentProduct.images;
    // const bigImages = product.lgPictures ? product.lgPictures : product.pictures;
    // const smallImages = product.smPictures ? product.smPictures : product.pictures;

    // useEffect(() => {
    //     // productGallery();
    //     quantityInputs();
    // }, [])

    useEffect(() => {
        productGallery();
    }, [currentProduct])

    function openLightBox() {
        let index = parseInt(document.querySelector(".product-main-image").getAttribute("index"));

        if (!index) {
            index = 0;
        }
        setStatus(true);
        setPhotoIndex(index);
    }

    function closeLightBox() {
        setStatus(false);
    }

    const setNextHandler = () => {
        setPhotoIndex(photoIndex => (photoIndex + 1) % bigImages.length);
    }

    const setPrevHandler = () => {
        setPhotoIndex(photoIndex => (photoIndex + bigImages.length - 1) % bigImages.length);
    }

    // const setNextHandler = () => {
    //     setPhotoIndex( photoIndex => ( photoIndex + 1 ) % bigImages.length );
    // }
    //
    // const setPrevHandler = () => {
    //     setPhotoIndex( photoIndex => ( photoIndex + bigImages.length - 1 ) % bigImages.length );
    // }

    if (!currentProduct.id) {
        return ''
    }


    return (
        <>
            <div className={`product-gallery ${adClass}`}>
                <div className="row m-0">
                    <figure className="product-main-image" index="0">
                        {/*{ product.new ? <span className="product-label label-new">New</span> : '' }*/}

                        {/*{ product.top ? <span className="product-label label-top">Top</span> : '' }*/}

                        {/*{ product.discount ? <span className="product-label label-sale">{ product.discount }% off</span> : '' }*/}

                        {/*{ ( 0 === product.stock ) ? <span className="product-label label-out">Out of Stock</span> : '' }*/}

                        {
                            currentProduct.images.length > 0 ?
                                <Magnifier
                                    imageSrc={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + currentProduct.images[0].fileName}
                                    imageAlt="Example"
                                    largeImageSrc={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + currentProduct.images[0].fileName} // Optional
                                    dragToMove={false}
                                    mouseActivation="hover"
                                    cursorStyleActive="crosshair"
                                    id="product-zoom"
                                /> :
                                <Magnifier
                                    imageSrc={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + currentProduct._fileName}
                                    imageAlt="Example"
                                    largeImageSrc={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + currentProduct._fileName} // Optional
                                    dragToMove={false}
                                    mouseActivation="hover"
                                    cursorStyleActive="crosshair"
                                    id="product-zoom"
                                />
                        }

                        {
                            currentProduct.images.length > 0 ?
                                <button id="btn-product-gallery" className="btn-product-gallery" onClick={openLightBox}>
                                    <i className="icon-arrows"/>
                                </button> : ''
                        }
                    </figure>

                    <div id="product-zoom-gallery" className="product-image-gallery">
                        {
                            currentProduct.images.length > 0 &&
                            currentProduct.images.map((item, index) =>
                                <button className={`product-gallery-item ${0 === index ? 'active' : ''}`}
                                        to="#"
                                        data-image={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + item.fileName}
                                        data-zoom-image={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + bigImages[index].fileName}
                                        key={currentProduct.id + '-' + index}>
                                    <img
                                        src={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + bigImages[index].fileName}
                                        alt="product back"/>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                isOpen ?
                    <Lightbox
                        // mainSrc={currentProduct.images[0]}
                        mainSrc={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + bigImages[photoIndex].fileName}
                        nextSrc={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + bigImages[(photoIndex + 1) % bigImages.length].fileName}
                        prevSrc={`${process.env.REACT_APP_API_URL}/uploads/variant_images/` + bigImages[(photoIndex + bigImages.length - 1) % bigImages.length].fileName}
                        // mainSrc={ process.env.PUBLIC_URL + '/' + bigImages[ photoIndex ] }
                        // nextSrc={ process.env.PUBLIC_URL + '/' + bigImages[ ( photoIndex + 1 ) % bigImages.length ] }
                        // prevSrc={ process.env.PUBLIC_URL + '/' + bigImages[ ( photoIndex + bigImages.length - 1 ) % bigImages.length ] }
                        onCloseRequest={closeLightBox}
                        onMovePrevRequest={setNextHandler}
                        onMoveNextRequest={setPrevHandler}
                    />
                    : ''
            }
        </>
    )
};

function mapStateToProps(state, props) {
    return {
        currentProduct: state.variants.variantDetail ? state.variants.variantDetail : {},
        product: state.data.products.filter(product => product.id === parseInt(props.id))[0]
    }
}

export default connect(mapStateToProps)(MediaOne);