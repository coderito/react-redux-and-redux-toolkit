import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Uno() {
    // enviar informacion a un reducer
    const dispatch = useDispatch();
    // seleccion un estado
    const miNombreAhora = useSelector(state => state.unValor.miNombre);

  return (
    <h1>
        {miNombreAhora}
    </h1>
  )
}
