import {configureStore} from "@reduxjs/toolkit";
import modalSlice from "./slices/modal";


const store = configureStore({
    reducer: {modal: modalSlice.reducer}
});

export default store;