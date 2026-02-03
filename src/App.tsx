import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import NotFound from "./pages/NotFound/Index";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
