import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";

import { Home } from "./pages/Home";
import { Results } from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="results/:name" element={<Results />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
