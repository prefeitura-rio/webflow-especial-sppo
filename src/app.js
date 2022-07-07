// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import TripsMap from "./pages/especial-sppo/tripsmap";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/especial-sppo" element={<TripsMap />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
