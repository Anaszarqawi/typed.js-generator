import React from 'react';
import { createRoot } from 'react-dom/client';

// components
import App from './components/App';

// JS Files
import './assets/js/script.js';
import './assets/packages/prism/prism.js';

// SCSS Files
import './assets/scss/rightMenu.scss';
import './assets/scss/navbar.scss';
import './assets/scss/buttons.scss';
import './assets/scss/code.scss';
import './assets/scss/options.scss';
import './assets/scss/textArea.scss';
import './assets/scss/vars.scss';
import './assets/scss/screens/laptop.scss';
import './assets/scss/screens/mobile+tablet.scss';
import './assets/scss/footer.scss';

import './assets/packages/prism/prism.css';

const MainContent = () => {
  return <App />;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MainContent />);
