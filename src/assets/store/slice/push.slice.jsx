import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const pushSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProuduct: (state, action) => {
      return action.payload;
    }
  }
});

export const getpushThunk = () => (dispatch) => {
  dispatch(setIsLoading(true))
  axios.
    get('https://e-commerce-api.academlo.tech/api/v1/products')
    .then(resp=>dispatch(setProuduct(resp.data.data.products)))
    .finally(()=>dispatch(setIsLoading(false)));
};

export const { setProuduct } = pushSlice.actions;

export default pushSlice.reducer;

