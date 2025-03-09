
import { Outlet } from 'react-router'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Box } from '@mui/material';

function Layout() {
  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      {/* Navbar */}
      <Box
        sx={{
          height: "50px",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          backgroundColor: "white",
        }}>
        <Navbar />
      </Box>

      {/* Sidebar & Main Content */}
      <Box sx={{ display: "flex", flexGrow: 1, marginTop: "50px" }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: "17%",
            height: "calc(100vh - 50px)",
            position: "fixed",
            top: "50px",
            left: 0,
            color: "white",
          }}>
          <Sidebar />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: "12%",
            padding: "5px",
            marginTop: "25px",
          }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout