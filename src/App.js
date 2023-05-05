import AppBar from "@mui/material/AppBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Add from "./Diaries/Add";
import Diaries from "./Diaries/Diaries";
import DiaryUpdate from "./Diaries/DiaryUpdate";

import Header from "./header/Header";
import Home from "./home/Home";
import Profile from "./home/Profile";
import { authActions } from "./store";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diaries" element={<Diaries />} />
        <Route path="/auth" element={<Auth />} />
        {isLoggedIn && (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/posts/:id" element={<DiaryUpdate />} />{" "}
            </>
          )}
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
