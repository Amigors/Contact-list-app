import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Provider} from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute';
import ContactsPage from './routes/ContactsPage';
import LoginPage from './routes/LoginPage';
import NotFound from './routes/NotFound';

import {store} from './app/store';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="contacts" element={<ProtectedRoute authenticationPath="/login" outlet={<ContactsPage />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
