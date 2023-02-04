import { BrowserRouter, Route, Routes } from "react-router-dom";

import Battle from "./Battle";
import Home from "./Home/index";
import Popular from "./Popular";
import NotFound from "./NotFound"
import Header from "./Header";
import Results from "./Battle/Results";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/github-battles/" element={<Home />} />
            <Route path="/github-battles/popular" element={<Popular />} />
            <Route path="/github-battles/battle" element={<Battle />} />
            <Route path="/github-battles/battle/results" element={<Results />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
