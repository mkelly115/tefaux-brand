import {takeLatest, all, call, put} from 'redux/saga/effects'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import { CATEGORIES_ACTION_TYPE } from './category.types';

export const fetchCategoriesAsync = () => async (dispatch) => {

    dispatch(fetchCategoriesStart())

    try{
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    
}

export function* categoriesSaga() {
    yield all([])



}