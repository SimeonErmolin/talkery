import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './shared/styles/main.scss';
import './i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import AppUser from './apps/user/AppUser.jsx';
import AppSpecialist from './apps/specialist/AppSpecialist.jsx';

const queryClient = new QueryClient();

const pathname = window.location.pathname;

let basename = '';

let App = <AppUser queryClient={queryClient} />;

if (pathname.startsWith('/specialist')) {
  basename = '/specialist';
  App = <AppSpecialist />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={basename}>{App}</BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
