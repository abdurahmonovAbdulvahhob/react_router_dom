import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Company from "./pages/Company";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="company" element={<Company />} />
          <Route path="career" element={<Career />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
