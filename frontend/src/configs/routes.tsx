import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home, SignUp, Login, Page404 } from "./layout";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
