import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./comonents/Body";
import Login from "./comonents/Login";
import Profile from "./comonents/Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* parent route  */}
          <Route path="/" element={<Body />}>
            {/* children routes  */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
