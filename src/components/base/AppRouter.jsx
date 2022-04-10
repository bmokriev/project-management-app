import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { routeMap } from "../../data/routeMap";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {routeMap().map((route, index) => (
          <Route path={route.path} element={route.component} key={index} />
        ))}
      </Routes>
    </Router>
  );
}

export default AppRouter;
