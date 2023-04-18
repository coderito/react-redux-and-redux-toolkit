import React, { useEffect, useState } from "react";

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
        <p>{item.name.first}</p>
      ))}
    </div>
  );
}
