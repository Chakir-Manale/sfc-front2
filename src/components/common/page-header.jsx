import React from 'react';
import {T} from "./partials/trans";

function PageHeader(props) {
    const {title, subTitle} = props;

    return (
        <div className="page-header text-center"
             style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/page-header-bg.jpg)`}}>
            <div className="container">
                <h1 className="page-title">
                    <T id={title}/>
                    <span>
                     <T id={subTitle}/>
                </span>
                </h1>
            </div>
        </div>
    );
}

export default React.memo(PageHeader);