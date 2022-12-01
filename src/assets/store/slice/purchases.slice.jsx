import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../utils/getConfig';
import { setProuduct } from './push.slice';

export const purchase = createSlice({
    name: 'purchase',
    initialState: [],
    reducers: {
        setPurchases: (state,action)=>{
            return action.payload;
        }
    }
})
export const getPushedThunk = () => (dispatch) => {
dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/purchases/',getConfig())
        .then((res) => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const {setPurchases} = purchase.actions;

export default purchase.reducer;
