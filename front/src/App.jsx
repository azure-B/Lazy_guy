import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HealthPage from './pages/HealthPage.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health" element={<HealthPage />} />
      </Routes>
    </Layout>
  );
}
