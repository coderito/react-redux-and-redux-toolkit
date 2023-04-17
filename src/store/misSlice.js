import { createSlice } from "@reduxjs/toolkit";

// funcion encarga de actualizar
export const origenSlice = createSlice({
    name: "unValor",
    initialState: {miNombre: "Juan", miApellido: "Eulufi"},
    reducers: {
        guardarNombre: (state, action) => {
            // enviando action y guardarlo en el estado
            state.miNombre = action.payload;
        }
    }
})

export const {guardarNombre} = origenSlice.actions