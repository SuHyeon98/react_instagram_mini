import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Routers/Main";
import Mypage from "./Routers/Mypage";
import Search from "./Routers/Search";
import Plus from "./Routers/Plus";
import Like from "./Routers/Like";
import Header from "./Components/Headers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/plus" element={<Plus />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
