import React from 'react';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import RecommendationPage from './pages/RecommendationPage';
// import CurriculumDetailsPage from './pages/Details/CurriculumDetailsPage';
// import AuthPage from './pages/AuthPage';
// import CurriculumPage from './pages/CurriculumPage';
import AERecommendationPage from './pages/AERecommendationPage';

import { useState } from 'react';
import NotifyPage from './pages/NotifyPage';
import ReviewerQueuePage from './pages/ReviewerQueuePage';
import ReviewerDashboard from './pages/ReviewerDashboard';
import ProposalHistory from './pages/ProposalHistory';
import SubmitReviewPage from './pages/SubmitReviewPage';
import AEQueuePage from './pages/AEQueuePage';
import AEFinalRecommendationPage from './pages/AEFinalRecommendationPage';
import AEHistoryPage from './pages/AEHistoryPage';
import UpdateCurriculumPage from './pages/UpdateCurriculumPage';
import AERevisionResponsePage from './pages/AERevisionResponsePage';
import AEDeskRejectPage from './pages/AEDeskRejectPage';

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
        <Route path="/reviewer/queue" element={<ReviewerQueuePage />} />
        <Route path="/reviewer/dashboard" element={<ReviewerDashboard />} />
        <Route path="/proposal/:proposalId/history" element={<ProposalHistory />} />
        <Route path="/review/:proposalId/:reviewerId/submit" element={<SubmitReviewPage />} />
        <Route path="/ae/queue" element={<AEQueuePage />} />
        <Route path="/proposal/:proposalId/final-recommendation/:aeId" element={<AEFinalRecommendationPage />} />
        <Route path="/ae/finalize/:proposalId" element={<AEFinalRecommendationPage />} />
        <Route path="/ae/:aeId/history" element={<AEHistoryPage aeId="ae123" />} />
        <Route path="/curriculum/update/:segmentId" element={<UpdateCurriculumPage />} />
        <Route path="/proposal/:proposalId/respond-revision" element={<AERevisionResponsePage />} />
        <Route path="/proposal/:proposalId/desk-reject" element={<AEDeskRejectPage aeId="ae123" />} />

      </Routes>
    </Router>
  );
}

export default App;
