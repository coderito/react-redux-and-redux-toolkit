import { createSlice } from "@reduxjs/toolkit";

// funcion encarga de actualizar
export const origenSlice = createSlice({
    name: "unValor",
    initialState: {miNombre: "Juan", miApellido: "Eulufi"},
    reducers: {
        guardarNombre: (state, action) => {
            // enviando action y guardarlo en el estado
            state.miNombre = action.payload;
        },
        guardarApellido: (state, action) => {
            state.miApellido = action.payload;
        }
    }
}) 

export const otroSlice = createSlice({
    name: "otroValor",
    initialState: {miPuntacion: 0},
    reducers: {
        incrementarPuntuacion: (state) => {
            state.miPuntacion = state.miPuntacion + 1;
        }
    }
}) 

export const {guardarNombre, guardarApellido} = origenSlice.actions;
export const {incrementarPuntuacion} = otroSlice.actions;