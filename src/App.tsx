import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* Main landing page */}
      <Route path="/" element={<LandingPage />} />
      {/* Redirect any unmatched route to "/" */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
