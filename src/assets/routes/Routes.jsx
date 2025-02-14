import {Routes as ReactDomRoutes, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import Error from "../components/Pages/Error/ErrorPage";
import Deportv from "../components/Pages/Deportv/Deportv";
import Publica from "../components/Pages/Publica/Publica";
import Dtv from "../components/Pages/Dtv/Dtv";
import Dtv2 from "../components/Pages/Dtv/Dtv2/Dtv2"
import Tnt from "../components/Pages/Tnt/Tnt";
import Tyc from "../components/Pages/Tyc/Tyc";
import Play from "../components/Pages/Tyc/Play/Play"
import Fox from "../components/Pages/Fox/Fox";
import Fox2 from "../components/Pages/Fox/Fox2/Fox2";
import Fox3 from "../components/Pages/Fox/Fox3/Fox3";


import Espn from "../components/Pages/Espn/Espn";
import E2 from "../components/Pages/Espn/E2/E2";
import E3 from "../components/Pages/Espn/E3/E3";
import E4 from "../components/Pages/Espn/E4/E4";
import E5 from "../components/Pages/Espn/E5/E5";
import E6 from "../components/Pages/Espn/E6/E6";
import E7 from "../components/Pages/Espn/E7/E7";
import Premium from "../components/Pages/Espn/Premium/Premium";
import Dmca from "../components/Pages/Dmca/Dmca";

function Routes() {
  return (
  <ReactDomRoutes>
    <Route path="/" element={<Home />} />
      <Route path="/espn" element={<Espn />} />
        <Route path="/espn/e2" element={<E2 />} />
        <Route path="/espn/e3" element={<E3 />} />
        <Route path="/espn/e4" element={<E4 />} />
        <Route path="/espn/e5" element={<E5 />} />
        <Route path="/espn/e6" element={<E6 />} />
        <Route path="/espn/e7" element={<E7 />} />
        <Route path="/espn/premium" element={<Premium />} />
      <Route path="/tnt" element={<Tnt />} />
      <Route path="/tyc" element={<Tyc />} />
      <Route path="/fox" element={<Fox />} />
        <Route path="/fox/2" element={<Fox2 />} />
        <Route path="/fox/3" element={<Fox3 />} />
      <Route path="/dtv" element={<Dtv />} />
        <Route path="/dtv/2" element={<Dtv2 />} />
      <Route path="/publica" element={<Publica />} />
      <Route path="/deportv" element={<Deportv />} />
      <Route path="/play" element={<Play />} />
      <Route path="/dmca" element={<Dmca />} />
    <Route path="*" element={<Error />} />
  </ReactDomRoutes>
  )
}

export default Routes
