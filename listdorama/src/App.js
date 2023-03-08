import {GlobalStyle} from "./assets/GlobalStyle"
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDorama from "./pages/AddDorama";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/dorama" element={<AddDorama/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
