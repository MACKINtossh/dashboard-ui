import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/business/layout";
import Dashboard from "scenes/business/dashboard";
import Financials from "scenes/financials";
import Ownership from "scenes/personal/ownershipPage";
import Home from "scenes/personal/homePage";
import LoginPage from "scenes/login";
import ProfilePage from "scenes/personal/profilePage";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            {/* <Route element={<Layout />}> */}
            {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/ownership" element={<Ownership />} />
            {/* </Route> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
