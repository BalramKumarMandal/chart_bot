import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
import FeedbackOverview from './pages/FeedbackOverview';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Chat toggleDarkMode={() => setDarkMode(!darkMode)} />}
          />
          <Route path="/feedback" element={<FeedbackOverview />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
