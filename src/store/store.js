import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        // asignando funcion
        unValor: origenSlice.reducer
    }
})