import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import StartPage from './pages/Start';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{ path: '/start', element: <StartPage /> },
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
