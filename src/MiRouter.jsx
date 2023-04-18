import React, { Fragment } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Uno from "./components/Uno";
import Dos from "./components/Dos";
import Listado from "./components/Listado";
import Candidato from "./components/Candidato";
import Gestion from "./components/Gestion";

export default function MiRouter() {
  return (
    <div>
      {/* <Link to="/uno">
        <button>Ir a uno</button>
      </Link>
      <Link to="/dos">
        <button>Ir a dos</button>
      </Link> */}
      <Routes>
        <Route path="/" element={<Listado />} />
        {/* <Route path="/uno" element={<Uno />} />
        <Route path="/dos" element={<Dos />} /> */}
        <Route path="/candidato" element={<Candidato/>} />
        <Route path="/gestion" element={<Gestion />} />
      </Routes>
    </div>
  );
}
