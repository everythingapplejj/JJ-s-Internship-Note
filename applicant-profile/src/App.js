import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicantProfilePage from './ApplicantProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApplicantProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
