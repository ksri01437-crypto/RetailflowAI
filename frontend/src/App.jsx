import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Stores from "./pages/Stores";
import Analytics from "./pages/Analytics";
import AIRecommendations from "./pages/AIRecommendations";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/ai" element={<AIRecommendations />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;