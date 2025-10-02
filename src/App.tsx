import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import MasterclassPage from './pages/MasterclassPage';
import EventDetailsPage from './pages/EventDetailsPage';
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
