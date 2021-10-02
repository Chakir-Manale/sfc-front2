import axios from 'axios';
import { ADD_FILTER_BY_BRAND_SLUG, ADD_FILTER_BY_CATEGORY_SLUG, ADD_FILTER_BY_PRICE_RANGE, ADD_FILTER_BY_SEARCH_KEYWORD, RESET_VARIANT_FILTERS, REFRESH_VARIANT_FILTERS } from "../constants/action-types";

import store from '../store';

// 
export const addBrandSlugToFilters = (brand) => async dispatch => {

  console.log(brand);

  dispatch({
      type: ADD_FILTER_BY_BRAND_SLUG,
      brand: brand,
  });

}

// 
export const addCategorySlugToFilters = (category) => async dispatch => {

  console.log(category);

  dispatch({
      type: ADD_FILTER_BY_CATEGORY_SLUG,
      category: category,
  });

}

// 
export const addPriceRangeToFilters = (price) => async dispatch => {

  dispatch({
      type: ADD_FILTER_BY_PRICE_RANGE,
      price: price,
  });

}

// 
export const addSearchKeywordToFilters = (search) => async dispatch => {

  dispatch({
      type: ADD_FILTER_BY_SEARCH_KEYWORD,
      search: search,
  });

}

// 
export const resetFilters = () => async dispatch => {

  dispatch({
      type: RESET_VARIANT_FILTERS,
  });

}

// 
export const refreshFilters = () => async dispatch => {

  dispatch({
      type: REFRESH_VARIANT_FILTERS,
  });

}