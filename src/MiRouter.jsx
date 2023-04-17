import React, { Fragment } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Uno from "./components/Uno";
import Dos from "./components/Dos";

export default function MiRouter() {
  return (
    <div>
      <Link to="/uno">
        <button>Ir a uno</button>
      </Link>
      <Link to="/dos">
        <button>Ir a dos</button>
      </Link>
      <Routes>
        <Route path="/uno" element={<Uno />} />
        <Route path="/dos" element={<Dos />} />
      </Routes>
    </div>
  );
}
