import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarApellido, guardarNombre } from "../store/misSlice";
import { incrementarPuntuacion } from "../store/misSlice";

export default function Uno() {
  // enviar informacion a un reducer
  const dispatch = useDispatch();
  // seleccion un estado
  const {miNombre, miApellido} = useSelector((state) => state.unValor);
  const miPuntuacionAhora = useSelector((state) => state.otroValor.miPuntacion);

  const modificarNombre = () => {
    dispatch(guardarNombre("Bob Sponja"));
  };

  const modificarApellido = () => {
    dispatch(guardarApellido("Patricio"))
  }

  const incrementar = () => {
    dispatch(incrementarPuntuacion())
  }
  return (
    <div>
      <h1>{miNombre}</h1>
      <button onClick={modificarNombre}>Modificar nombre</button>

      <h1>{miApellido}</h1>
      <button onClick={modificarApellido}>Modificar Apellido</button>

      <h1>{miPuntuacionAhora}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
