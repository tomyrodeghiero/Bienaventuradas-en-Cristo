import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReadingScreen from "./pages/reading-screen/ReadingScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading" element={<ReadingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
