import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from './components/common/Toast';
import Layout from './components/common/Layout';
import Dashboard from './components/dashboard/Dashboard';
import UnitBuilder from './components/unit-builder/UnitBuilder';
import LessonEditor from './components/lesson-editor/LessonEditor';
import PBLBuilder from './components/pbl-builder/PBLBuilder';
import ActivitiesPage from './components/activities/ActivitiesPage';
import Login from './components/common/Login';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="unit/new" element={<UnitBuilder />} />
            <Route path="unit/:unitId" element={<UnitBuilder />} />
            <Route path="unit/:unitId/lesson/:lessonId" element={<LessonEditor />} />
            <Route path="pbl/new" element={<PBLBuilder />} />
            <Route path="pbl/:unitId" element={<PBLBuilder />} />
            <Route path="activities" element={<ActivitiesPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
