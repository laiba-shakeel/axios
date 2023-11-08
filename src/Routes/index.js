import React from "react";
import CardsScreen from "../screen/CardsScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenClothes from "../screen/MenClothes";
import WomenClothes from "../screen/WomenClothes";
import Accessories from "../screen/Accessories";
const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsScreen />} />
          <Route path="/men" element={<MenClothes />} />
          <Route path="/women" element={<WomenClothes />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
