import "./App.css";
import Home from "./Screen/Home";
import Notfound from "./Screen/Notfound";
import 'antd/dist/reset.css';

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound NotfoundText="Page Not Found" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
