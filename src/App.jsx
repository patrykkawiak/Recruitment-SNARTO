import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import StartPage from './pages/Start/Start';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Register/Register';
import ErrorPage from './pages/Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{ path: '/start', element: <StartPage /> },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/register', element: <RegisterPage /> },
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
