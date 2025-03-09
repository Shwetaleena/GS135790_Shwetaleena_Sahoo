import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Logo from "../assets/GsynergyLogo.svg"
const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "white", color: "black", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Company Logo */}
        <Box
          component="img"
          src={Logo}
          alt="Company Logo"
          sx={{ height: 60 }}
        />
        <h1 style={{ fontFamily: "Arial" }}>Data Viewer App</h1>
        {/* Sign In Button with User Icon */}
        <Button color="inherit" startIcon={<AccountCircle />}>
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
