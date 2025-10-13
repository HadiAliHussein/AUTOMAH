import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import logo from './logo.svg';
import './App.css';
import './sites/AutoMAH'
import AutoMAH from './sites/AutoMAH';
import Privacy from './sites/Privacy'
import Imprint from './sites/Imprint'
import Tos from './sites/Tos'
import Topbar from './sites/Topbar';
import Footer from './sites/Footer';


function App() {
  return (
    <Router>
    <ScrollToTop />
      <Topbar />

      <Routes>
        <Route path="/" element={<AutoMAH />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/tos" element={<Tos />} />
      </Routes>

      <Footer />
    </Router>
  );
}


export default App;