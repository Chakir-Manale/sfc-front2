import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';

import MobileMainNav from './partials/mobile-nav';
import {T} from "./partials/trans";
import {addSearchKeywordToFilters} from "../../actions/variantFilterActions";
import {getAllVariantsWithFilters} from "../../actions/variantActions";
import {useTranslation} from "react-i18next";

function MobileMenu( props ) {
    const { adClass } = props;
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [keysearch, setKeysearch] = useState();

    return (
        <div className={ `mobile-menu-container ${adClass}` }>
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close"><i className="icon-close"/></span>

                <form action={`${process.env.PUBLIC_URL}/shop/filtered`} method="get" className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">
                        <label htmlFor="q" className="sr-only">
                            <T id={"HEADER.SEARCH.LABEL"}/>
                        </label>
                    </label>
                    <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder={t('HEADER.SEARCH.PLACEHOLDER')}
                           onChange={(e) => setKeysearch(e.target.value)} required />
                    <button className="btn btn-primary" type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(addSearchKeywordToFilters(keysearch));
                                dispatch(getAllVariantsWithFilters());
                            }}>
                        <i className="icon-search"/>
                    </button>
                </form>

                <nav className="mobile-nav">
                    <MobileMainNav />
                </nav>

                <div className="social-icons">
                    <Link to="https://www.facebook.com/Naturalflow-203942598315864" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"/></Link>
                    <Link to="https://www.instagram.com/naturalflow.2021/" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"/></Link>
                    <Link to="https://www.youtube.com/channel/UC7idKzh4bwtqk0FqrJqNNiA" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"/></Link>
                </div>
            </div>
        </div>
    )
}

// export default React.memo( MobileMenu );

function mapStateToProps( state ) {
    return {
        categories: state.categories.categories ? state.categories.categories : [],
    }
}

export default connect( mapStateToProps, {
    addSearchKeywordToFilters,
    getAllVariantsWithFilters
}) (MobileMenu);
