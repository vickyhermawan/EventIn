import Auth from '../layout/auth'
import HomePage from '../../app/home/home-page'
import EventPage from '../../app/event/event-page'
import DetailPage from '../../app/detail/detail-page'
import ProfilePage from '../../app/profile/profile-page'
import DashboardPage from '../../common/layout/dashboard-admin'
import LoginComponent from '../../app/auth/authlogin-page'
import RegisterComponent from '../../app/auth/authregister-page'
import AboutPage from '../../app/about/about-page'



const baseUrl = process.env.PUBLIC_URL;

const routeSources = [
    { component: HomePage, path: `${baseUrl}/`, exact: true },
    { component: EventPage, path: `${baseUrl}/event`, exact: true },
    { component: DetailPage, path: `${baseUrl}/detail`, exact: true },
    { component: LoginComponent, path: `${baseUrl}/login`, exact: true },
    { component: RegisterComponent, path: `${baseUrl}/register`, exact: true },
    { component: ProfilePage, path: `${baseUrl}/profile`, exact: true },
    { component: DashboardPage, path: `${baseUrl}/dashboard`, exact: false },
    { component: AboutPage, path: `${baseUrl}/about`, exact: false },
    // { component: ExamplePage, path: `${baseUrl}/example`, exact: true},
];

export default routeSources;