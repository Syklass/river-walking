import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/pages/MainPage"
// import ProgPage from "./components/pages/ProgPage";
// import DevicesPage from "./components/pages/DevicesPage";
// import SertsPage from "./components/pages/SertsPage";


function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<MainPage />} />
            {/* <Route path="/program" exact element={<ProgPage />} />
            <Route path="/devices" exact element={<DevicesPage />} />
            <Route path="/documents" exact element={<SertsPage />} />
            <Route path="*" replace element={<Navigate to="/" />} /> */}
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
