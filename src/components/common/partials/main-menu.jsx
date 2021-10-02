import React, {useEffect, useState} from 'react';
import {AELink} from "./link";
import clsx from "clsx";
import {getPropValue} from "../../../i18n/helpers";
// import {headerMenu} from '../../../mock_data/data';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {T} from "./trans";

/**
 * TODO
 * - active menu : use className={`-active`} in any li tag
 * - Single Menu source, DB ?
 */
const MenuItem = ({path = '', children = [], ...menu}) => {
    getPropValue()
    const hasChildren = children.length > 0

    return (
        <li>
            <AELink to={path} className={clsx({'sf-with-ul': hasChildren})}>
                {getPropValue(menu, 'title')} {/*TODO i18n*/}
            </AELink>

            {
                hasChildren &&
                <ul>
                    {children.map(menu => <MenuItem key={menu.titleEn} {...menu} />)}
                </ul>
            }

        </li>
    )
}


function MainMenu(props) {
    const [path, setPath] = useState("");
    const PUBLIC_URL = "/react/molla";
    let categories = props.categories;


    useEffect(() => {
        setPath(window.location.href);
    })

    function showAllDemos(e) {
        let demoItems = document.querySelectorAll('.demo-item.hidden');

        for (let i = 0; i < demoItems.length; i++) {
            demoItems[i].classList.toggle('show');
        }

        document.querySelector('.view-all-demos').classList.toggle('disabled-hidden');
        e.preventDefault();
    }


    return (
        <nav className="main-nav">

            <ul className="menu sf-arrows">
                {/*{*/}
                {/*    headerMenu.map((menu, index)=>(<MenuItem key={index} {...menu}/>))*/}
                {/*}*/}

                <li className={`megamenu-container`} id="menu-home">
                    <Link to={`${process.env.PUBLIC_URL}`}>
                        <T id={"HOME.PAGE"}/>
                    </Link>
                </li>

                <li className={path.indexOf("/category") > -1 ? 'active' : ''}>
                    <Link to={`${process.env.PUBLIC_URL}/shop`} className="sf-with-ul" id="navspan">
                        <T id={"OUR.PRODUCTS"}/>
                    </Link>

                    <ul className="scroller menu sf-arrows"
                        style={{
                            overflowY: 'scroll',
                            maxHeight: '650px',
                            direction: 'ltr',
                            scrollbarWidth: 'thin !important'
                        }}>
                        {
                            categories.map((item, index) =>
                                <div className="filter-item" key={`cat_${index}`}>
                                    <span></span>
                                    <li className={path.indexOf("blog/classic") > -1 ? 'active' : ''}>
                                        <Link to={`${process.env.PUBLIC_URL}/shop/bycategory/${item.id}`}
                                              className="text-truncate">
                                            <i className="" key={`${item.id}`}/>
                                            {item.nameFr}
                                        </Link>
                                    </li>
                                </div>
                            )
                        }
                    </ul>
                </li>

                <li className={''}>
                    <Link to={`${process.env.PUBLIC_URL}/pages/about`}>
                        <T id={"ABOUT.PAGE"}/>
                    </Link>
                </li>

                <li className={''}>
                    <Link to={`${process.env.PUBLIC_URL}/pages/contact`}>
                        <T id={"CONTACT.PAGE"}/>
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

function mapStateToProps(state) {
    return {
        categories: state.categories.categories ? state.categories.categories : [],
    }
}

export default connect(mapStateToProps, null)(MainMenu);