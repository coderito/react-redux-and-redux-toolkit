import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarNombre } from "../store/misSlice";

export default function Uno() {
  // enviar informacion a un reducer
  const dispatch = useDispatch();
  // seleccion un estado
  const miNombreAhora = useSelector((state) => state.unValor.miNombre);

  const modificar = () => {
    dispatch(guardarNombre("Bob Sponja"));
  };
  return (
    <div>
      <h1>{miNombreAhora}</h1>
      <button onClick={modificar}>Modificar nombre</button>
    </div>
  );
}
