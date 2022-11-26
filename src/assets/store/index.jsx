import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slice/isLoading.slice";
import pushSlice from "./slice/push.slice";
export default configureStore({
    reducer:{
        products:pushSlice,
        isLoading: isLoadingSlice
    }

})