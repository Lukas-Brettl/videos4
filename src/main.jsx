import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import './index.css'
import Home from './Home.jsx'
import Hory2 from "./Hory2.jsx"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hory2" element={<Hory2 />} />
    </Routes>
  </HashRouter>
);
