import React from 'react'
import { useSelector } from 'react-redux'

export default function Dos() {
    const miApellido = useSelector(state => state.unValor.miApellido);

  return (
    <h1>{miApellido}</h1>
  )
}
