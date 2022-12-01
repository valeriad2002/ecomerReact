import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice/card.slice";
import isLoadingSlice from "./slice/isLoading.slice";
import purchasesSlice from "./slice/purchases.slice";
import pushSlice from "./slice/push.slice";
export default configureStore({
    reducer:{
        products:pushSlice,
        isLoading: isLoadingSlice,
        purchase :purchasesSlice ,
        card: cardSlice,
    }

})