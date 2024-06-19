import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./layout";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
