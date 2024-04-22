import Home from "./features/Home";
import Products from "./features/Products";
import Blogs from "./features/Blogs";
import Profile from "./features/Profile";
import Layout from "./Layout.jsx";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact path="" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
