import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Member from './pages/Member';

const App = () => {
  // You can add authentication logic here
  const isAuthenticated = true; // Replace with your auth logic

  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/events" 
          element={isAuthenticated ? <Events /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/member" 
          element={isAuthenticated ? <Member /> : <Navigate to="/login" />} 
        />

        {/* Catch all for undefined routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;