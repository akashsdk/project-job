import "./App.css";
import Home from "./Screen/Home";
import Notfound from "./Screen/Notfound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "antd/dist/reset.css";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Notfound NotfoundText="Page Not Found" />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
