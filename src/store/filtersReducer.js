import React from 'react';

const SET_CATEGORY = 'SET_CATEGORY'
const SET_SORT = 'SET_SORT'

const initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state, category: action.payload
            }
        case SET_SORT:
            return {
                ...state, sortBy: action.payload
            }

        default:
            return state
    }
};


export const setCategory = (payload) =>({type:SET_CATEGORY, payload})
export const setSort = ({ type, order}) =>({type:SET_SORT, payload: { type, order}})
export default filtersReducer;