
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './common/Layout'
import StoreManagement from './pages/StoreManagement';
import SKUManagement from './pages/SKUManagement';
import Planning from './pages/Planning';
import Charts from './pages/Charts';
import ErrorPage from './pages/ErrorPage';
import { Paths } from './utils/enums/paths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Wrapper for All Routes */}
        <Route path={Paths.HOME} element={<Layout />}>
          <Route index element={<StoreManagement />} />
          <Route path={Paths.STORE} element={<StoreManagement />} />
          <Route path={Paths.SKU} element={<SKUManagement />} />
          <Route path={Paths.PLANNING} element={<Planning />} />
          <Route path={Paths.CHARTS} element={<Charts />} />
        </Route>
        {/* Catch-All Route for 404 */}
        <Route path={Paths.NOT_FOUND} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
