import {GlobalStyle} from "./assets/GlobalStyle"
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter> */}
      <Home/>
    </>
  );
}

export default App;
