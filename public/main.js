import SPA from './core/spa.js';

// Note: Import Pages Here
import PageNotFound from './pages/pageNotFound.js';
import Landing from './pages/landing.js';
import AdminLogin from './pages/admin/login.js';
import AdminHome from './pages/admin/home.js';
import AdminReport from './pages/admin/report.js';
import AdminStudentManagement from './pages/admin/studentManagement.js';
import AdminEventManagement from './pages/admin/eventManagement.js';
import AdminaccountManagement from './pages/admin/accountManagement.js';
import UserLogin from './pages/user/login.js';
import UserHome from './pages/user/home.js';

import './styles/common.css';

const app = new SPA({
    root: document.getElementById('app'),
    defaultRoute: PageNotFound
});

window.app = app;

// Note: Implement Pages Here!
app.add('/', Landing);
app.add('/login/', UserLogin);
app.add('/user/', UserHome);
app.add('/login/admin', AdminLogin);
app.add('/admin/', AdminHome);
app.add('/admin/report', AdminReport);
app.add('/admin/student', AdminStudentManagement);
app.add('/admin/event', AdminEventManagement);
app.add('/admin/account-management', AdminaccountManagement)


app.handleRouteChanges();