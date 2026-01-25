import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/common/Layout';
import Dashboard from './components/dashboard/Dashboard';
import UnitBuilder from './components/unit-builder/UnitBuilder';
import LessonEditor from './components/lesson-editor/LessonEditor';
import Login from './components/common/Login';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="unit/new" element={<UnitBuilder />} />
          <Route path="unit/:unitId" element={<UnitBuilder />} />
          <Route path="unit/:unitId/lesson/:lessonId" element={<LessonEditor />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
