import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
