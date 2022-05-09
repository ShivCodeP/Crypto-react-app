import {configureStore} from "@reduxjs/toolkit";
import {cryptoApi} from "../services/cryptoapi";

console.log(cryptoApi)

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
})