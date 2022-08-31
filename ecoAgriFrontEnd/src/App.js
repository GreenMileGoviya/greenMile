import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from './components/pages/Registration';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import Login from './components/pages/Login';
import Test from './components/ui/ImageUploader';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#007A31",
      },
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>

  );
}

export default App;
