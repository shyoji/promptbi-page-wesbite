import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import MasterclassPage from './pages/MasterclassPage';
import EventDetailsPage from './pages/EventDetailsPage';
import HackathonsPage from './pages/HackathonsPage';
import HackathonDetailsPage from './pages/HackathonDetailsPage';
import UberRevenueHackathonPage from './pages/UberRevenueHackathonPage';
import DataTalentAcceleratorPage from './pages/DataTalentAcceleratorPage';
import BlogsPage from './pages/BlogsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<EventDetailsPage />} />
          <Route path="/masterclass" element={<MasterclassPage />} />
          <Route path="/hackathons" element={<HackathonsPage />} />
          <Route path="/hackathons/:slug" element={<HackathonDetailsPage />} />
          <Route path="/hackathons/uber-revenue-growth" element={<UberRevenueHackathonPage />} />
          <Route path="/data-talent-accelerator" element={<DataTalentAcceleratorPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
