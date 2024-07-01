import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import {
  Home,
  SignUp,
  Login,
  Page404,
  PasswordReset_ConfirmPhoneNumber,
  PasswordReset_ConfirmCode,
} from "./layout";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/confirm-email"
          element={<PasswordReset_ConfirmPhoneNumber />}
        />
        <Route path="/confirm-code" element={<PasswordReset_ConfirmCode />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
