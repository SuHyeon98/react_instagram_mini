import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Routers/Main";
import Mypage from "./Routers/Mypage";
import Search from "./Routers/Search";
import Plus from "./Routers/Plus";
import Like from "./Routers/Like";
import LayOut from "./Components/Layout/Layout";
import TopBar from "./Components/Common/Header/TopBar";

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
          element={
            <LayOut
              header={{ header: null }}
              children={{ children: <Search /> }}
            />
          }
        />
        <Route
          path="/plus"
          element={
            <LayOut
              header={{ header: null }}
              children={{ children: <Plus /> }}
            />
          }
        />
        <Route
          path="/Like"
          element={
            <LayOut
              header={{ header: null }}
              children={{ children: <Like /> }}
            />
          }
        />
        <Route
          path="/mypage"
          element={
            <LayOut
              header={{ header: null }}
              children={{ children: <Mypage /> }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
