import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import RecommendationPage from './pages/RecommendationPage';
// import CurriculumDetailsPage from './pages/Details/CurriculumDetailsPage';
// import AuthPage from './pages/AuthPage';
// import CurriculumPage from './pages/CurriculumPage';
import AERecommendationPage from './pages/AERecommendationPage';

import { useState } from 'react';
import NotifyPage from './pages/NotifyPage';

function App() {
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/proposal/:proposalId/recommendation" element={<RecommendationPage />} />
        <Route path="/" element={<h1>LiveC is Running</h1>} />
        {/* <Route path='/auth' element={<AuthPage />} /> */}
        {/* <Route path='/curriculum' element={<CurriculumPage setSelectedCurriculum={setSelectedCurriculum} />} /> */}
        {/* <Route path='/curriculum/:slug' element={<CurriculumDetailsPage selectedCurriculum={selectedCurriculum} />} /> */}
        <Route path="/proposal/:proposalId/recommend" element={<AERecommendationPage />} />
        <Route path="/notify" element={<NotifyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
