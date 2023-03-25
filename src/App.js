import AppBar from "@mui/material/AppBar";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Diaries from "./Diaries/Diaries";

import Header from "./header/Header";
import Home from "./home/Home";

function App() {
  // const [isLoggedIn] = useSelector((state) => state.isLoggedIn);
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diaries" element={<Diaries />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
