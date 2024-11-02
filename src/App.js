import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import EnglishMenu from "./Pages/EnglishMenu";
import ArabicMenu from "./Pages/ArabicMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/englishmenu" element={<EnglishMenu />} />
        <Route path="/arabicmenu" element={<ArabicMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
