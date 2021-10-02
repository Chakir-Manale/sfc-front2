import i18n from "i18next";

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

export const getPropValue = (data, property, defaultValue) => {
    if (! property) return defaultValue;

    return data[`${property+capitalizeFirstLetter(i18n.language)}`]
}