import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UrlGenerator from "./views/UrlGenerator";
import Redirect from "./views/Redirect";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UrlGenerator />} />
          <Route path="/:shortId" element={<Redirect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
