import SPA from './core/spa.js';

// Note: Import Pages Here
import PageNotFound from './pages/pageNotFound.js';
import Landing from './pages/landing.js';
import AdminLogin from './pages/admin/login.js';
import UserLogin from './pages/user/login.js';

import './styles/common.css';

const app = new SPA({
    root: document.getElementById('app'),
    defaultRoute: PageNotFound
});

window.app = app;

// Note: Implement Pages Here!
app.add('/', Landing);
app.add('/login/', UserLogin)
app.add('/login/admin', AdminLogin);
app.handleRouteChanges();