import React, { Children } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Routers/Main";
import Mypage from "./Routers/Mypage";
import Search from "./Routers/Search";
import Plus from "./Routers/Plus";
import Like from "./Routers/Like";
import LayOut from "./Components/Layout/Layout";
import TopBar from "./Components/Main/TopBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayOut
              header={{ header: <TopBar /> }}
              children={{ children: <Main /> }}
            />
          }
        />
        <Route
          path="/search"
          element={<LayOut children={{ children: <Search /> }} />}
        />
        <Route
          path="/plus"
          element={<LayOut children={{ children: <Plus /> }} />}
        />
        <Route
          path="/Like"
          element={<LayOut children={{ children: <Like /> }} />}
        />
        <Route
          path="/mypage"
          element={<LayOut children={{ children: <Mypage /> }} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
