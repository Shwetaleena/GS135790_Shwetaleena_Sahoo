
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './common/Layout'
import StoreManagement from './pages/StoreManagement';
import SKUManagement from './pages/SKUManagement';
import Planning from './pages/Planning';
import Charts from './pages/Charts';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/stores" element={<StoreManagement />} />
          <Route path="/skus" element={<SKUManagement />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/charts" element={<Charts />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
