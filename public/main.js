import SPA from './core/spa.js';

// Note: Import Pages Here
import PageNotFound from './pages/pageNotFound.js';
import Landing from './pages/landing.js';
import Login from './pages/login.js';

import './styles/common.css';

const app = new SPA({
    root: document.getElementById('app'),
    defaultRoute: PageNotFound
});

window.app = app;

// Note: Implement Pages Here!
app.add('/', Landing);
app.add('/login/', Login);
app.handleRouteChanges();