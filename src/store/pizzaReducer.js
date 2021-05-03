import axios from "axios";
const SET_LOADED = 'SET_LOADED'
const SET_PIZZA = 'SET_PIZZA'

const initialState = {
    items: [],
    isLoaded:false

}

export const pizzaReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_PIZZA:
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case SET_LOADED:
            return{
                ...state,
                isLoaded: action.payload
            }

        default:
            return state
    }

}


export const setPizza = (pizzas) => ({type:SET_PIZZA, payload:pizzas })
export const setLoaded = (payload) => ({type:SET_LOADED, payload})
export const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch(setLoaded(false))
     axios.get(`/pizzas?${category !== null? `category=${category}`:''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
         .then(data=> {
             dispatch(setPizza(data.data))
         })

}