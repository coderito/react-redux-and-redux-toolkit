import React, { Fragment } from 'react'
import { Router, Routes, Route, Link } from 'react-router-dom'
import Uno from './components/Uno'
import Dos from './components/Dos'

export default function Router() {
  return (
    <Fragment>
        <Router>
            <Link to="/uno" ><button>Ir a uno</button></Link>
            <Link to="/dos"><button>Ir a dos</button></Link>
            <Routes>
                <Route path='/uno' element={<Uno/>} />
                <Route path='/dos' element={<Dos/>} />
            </Routes>
        </Router>
    </Fragment>
  )
}
