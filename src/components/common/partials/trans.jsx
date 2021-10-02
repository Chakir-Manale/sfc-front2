import React from 'react';
import {useTranslation} from "react-i18next";

export const T = ({id, server}) =>{
    const {t} = useTranslation()
    return t(id)
}