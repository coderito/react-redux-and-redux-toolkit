import React, { useEffect, useState } from "react";
import Candidato from "./Candidato";

export default function Listado() {
  const [cantidatos, setCantidatos] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((data) => setCantidatos(data.results));
  }, []);

  return (
    <div>
      <h1>{cantidatos.length}</h1>

      {cantidatos.map((item) => (
        <Candidato user={item}/>
      ))}
    </div>
  );
}
