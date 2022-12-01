/*https://e-commerce-api.academlo.tech/api/v1/cart */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import { setIsLoading } from './isLoading.slice';


export const Card = createSlice({
    name: 'card',
    initialState: [],
    reducers: {
        setCard: (state, action) => {
            return action.payload;
        }
    }
})
export const getCardthunk = () => (dispatch) => {
    // dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart/',getConfig())
        .then((res) => dispatch(setCard(res.data.data.cart.products)))
    //     .finally(() => dispatch(setIsLoading(false)));
}
export const createCarThunk = (producttoCart) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart',producttoCart,getConfig())
    /*method*/(/* URL */)
        .then((res) => dispatch(getCardthunk()))
        .finally(() => dispatch(setIsLoading(false)))
        .catch(error=>console.log(error.response.data));

}
export const { setCard } = Card.actions;

export default Card.reducer;
