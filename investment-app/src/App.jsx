import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import StockDetail from './components/StockDetail';
import Portfolio from './components/Portfolio';
import Screener from './components/Screener';
import Watchlist from './components/Watchlist';
import Politics from './components/Politics';

function App() {
  return (
    <Routes>
      {/* Stock Detail - full screen, no bottom nav */}
      <Route path="/stock/:symbol" element={<StockDetail />} />

      {/* Main app with bottom navigation */}
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/screener" element={<Screener />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  );
}

export default App;
