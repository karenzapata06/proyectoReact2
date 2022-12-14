import { Routes, Route, Link } from "react-router-dom";

import {Home} from "../Home/Home.js"
import {Historia} from "../Historia/Historia.js"
import {Albumes} from "../Albumes/Albumes.js"
import {Integrantes} from "../Integrantes/Integrantes.js"
import {Menu} from "../Menu/Menu.js"


export function Rutas() {
    return (
      <div>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="albumes" element={<Albumes />} />
          <Route path="integrantes" element={<Integrantes />} />
        </Routes>
      </div>
    );
  }