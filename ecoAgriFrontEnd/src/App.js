import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from './components/pages/Registration';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import Login from './components/pages/Login';
import DashBoard from './components/pages/farmer/DashBoard';
import Buy from './components/pages/farmer/Buy';
import Sell from './components/pages/farmer/Sell';
import PendingDonations from './components/pages/farmer/PendingDonations';
import AddBank from './components/pages/farmer/AddBank';
import Test from './components/ui/Test';
import AddSaleProduct from './components/pages/farmer/AddSaleProduct';
import Donate from './components/pages/farmer/Donate';
import AddDonateProduct from './components/pages/farmer/AddDonateProduct';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#007A31",
      },
    },
    typography: {
      fontFamily: "Poppins",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/pending" element={<PendingDonations />} />
          <Route path="/sell/add-bankAccount" element={<AddBank />} />
          <Route path="/sell/add-sell-product" element={<AddSaleProduct />} />
          <Route path="/donate/add-donate-product" element={<AddDonateProduct />} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
