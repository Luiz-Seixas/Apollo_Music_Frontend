import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { Artist } from "./pages/Artist";

import { Home } from "./pages/Home";
import { Results } from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="results/:name" element={<Results />} />
          <Route path="artist/:id" element={<Artist />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
