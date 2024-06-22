import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home, Page404 } from "./layout";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
