import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';
import Contacts from './routes/Contacts';
import Login from './routes/Login';
import NotFound from './routes/NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route
          path="contacts"
          element={<ProtectedRoute isAuthenticated={true} authenticationPath="/login" outlet={<Contacts />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
