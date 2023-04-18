import { createSlice } from "@reduxjs/toolkit";

// funcion encarga de actualizar
export const origenSlice = createSlice({
  name: "unValor",
  initialState: {
    miNombre: "Juan",
    miApellido: "Eulufi",
    bibliotecas: [
      { nombre: "react", inicio: 2013 },
      { nombre: "redux", inicio: 2015 },
    ],
  },
  reducers: {
    guardarNombre: (state, action) => {
      // enviando action y guardarlo en el estado
      state.miNombre = action.payload;
    },
    guardarApellido: (state, action) => {
      state.miApellido = action.payload;
    },
    modificarMatriz: (state, action) => {
      const { indice, nuevoNombre, nuevoInicio } = action.payload;
      state.bibliotecas[indice].nombre = nuevoNombre;
      state.bibliotecas[indice].inicio = nuevoInicio;
    },
    agregarValorMatriz: (state, action) => {
      const { nuevoNombre, nuevoInicio } = action.payload;
      state.bibliotecas = [
        ...state.bibliotecas,
        { nombre: nuevoNombre, inicio: nuevoInicio },
      ];
    },
    eliminarValorMatriz: (state, action) => {
      const { nombreEliminar } = action.payload;
      state.bibliotecas = state.bibliotecas.filter(biblioteca => biblioteca.nombre !== nombreEliminar);
    }
  },
});

export const otroSlice = createSlice({
  name: "otroValor",
  initialState: { miPuntacion: 0 },
  reducers: {
    incrementarPuntuacion: (state) => {
      state.miPuntacion = state.miPuntacion + 1;
    },
  },
});

export const { guardarNombre, guardarApellido, modificarMatriz, agregarValorMatriz,eliminarValorMatriz } = origenSlice.actions;
export const { incrementarPuntuacion } = otroSlice.actions;
