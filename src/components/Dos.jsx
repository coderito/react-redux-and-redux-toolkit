import React from "react";
import { useSelector } from "react-redux";

export default function Dos() {
  const { bibliotecas } = useSelector((state) => state.unValor);

  return (
    <h2>
      {bibliotecas.map((biblioteca) => (
        <div>
          <p>{biblioteca.nombre}</p>
          <p>{biblioteca.inicio}</p>
        </div>
      ))}
    </h2>
  );
}
