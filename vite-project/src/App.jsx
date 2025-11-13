import { Routes, Route, Link, useNavigate } from "react-router";
import "./app.css"


import Home from "./pages/Home"
import Product from "./pages/Product"
import User from "./pages/User"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
    {/* <div className="devLinks">
      <Link to="/">Forside</Link>
      <> | </>
      <Link to="/product">Product</Link>
      <> | </>
      <Link to="/user">User</Link>
    </div> */}
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
