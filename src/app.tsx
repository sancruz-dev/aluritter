import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  );
}
