import React from 'react';
import {Link} from "react-router-dom";

export const toAbsoluteUrl = (path)=>`${process.env.PUBLIC_URL}${path}`

export const AELink = ({to, children, ...props}) =>{

    return (
        <Link to={toAbsoluteUrl(to)} {...props}>
            {children}
        </Link>
    )
}