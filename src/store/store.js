import { configureStore } from "@reduxjs/toolkit";
import { origenSlice } from "./misSlice";

export default configureStore({
    reducer: {
        // asignando funcion
        unValor: origenSlice.reducer
    }
})