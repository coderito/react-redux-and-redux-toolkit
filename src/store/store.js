import { configureStore } from "@reduxjs/toolkit";
import { origenSlice, otroSlice } from "./misSlice";

export default configureStore({
    reducer: {
        // asignando funcion
        unValor: origenSlice.reducer,
        otroValor: otroSlice.reducer,
    }
})