import React from 'react';
import { createRoot } from 'react-dom/client';

// components
import App from './components/App';

// JS Files
import './assets/js/script.js';

// SCSS Files
import './assets/scss/vars.scss';
import './assets/scss/root.scss';

const MainContent = () => {
  return <App />;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MainContent />);
