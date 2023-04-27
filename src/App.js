import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import LoginPage from "scenes/login";
import ProfilePage from "scenes/personal/profilePage";
import Dashboard from "scenes/hub/Dashboard";
import Topbar from "scenes/hub/Topbar";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Topbar />} />
        </Routes>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <ThemeProvider theme={theme}>
          <CssBaseline /> */
}

{
  /* CHAT AUTHENTICATION ROUTES */
}
{
  /* <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            /> */
}
