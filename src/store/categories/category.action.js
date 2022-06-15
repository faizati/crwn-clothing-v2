import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (payload) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START_SUCCESS, payload);

export const fetchCategoriesFail = (payload) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START_FAIL, payload);

export const fetchCategoriesAsync = () => async (dispatch) => {
  try {
    dispatch(fetchCategoriesStart());
    const categoriesArray = await getCategoriesAndDocuments("collections");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFail(error));
  }
};
