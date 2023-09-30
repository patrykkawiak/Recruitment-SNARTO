import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import style from './Error.module.scss';

const ErrorPage = () => {
	return (
		<section className={style.error}>
			<h1 className={style.heading}>Page not fount</h1>
			<Button type={'primary'}>
				<Link to={'/'}>Back to Home Page</Link>
			</Button>
		</section>
	);
};
export default ErrorPage;
