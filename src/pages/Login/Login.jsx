import { Form, Link } from 'react-router-dom';
import style from './Login.module.scss';
import LeftArrow from '../../assets/svg/LeftArrow';
import Button from '../../components/UI/Button/Button';
import Heading from '../../components/UI/Heading/Heading';
import Section from '../../components/UI/Section/Section';
import SectionBox from '../../components/UI/SectionBox/SectionBox';

const LoginPage = () => {

	const loginHandler = (e) => {
		e.prevent
	}

	return (
		<Section isMax={true}>
			<SectionBox>
				<div className={style.link}>
					<Link to={'/start'}>
						<LeftArrow />
					</Link>
				</div>
				<div className={style.content}>
					<Heading>Login</Heading>
					<form className={style.form} method='POST'>
						<div className={style.inputs}>
							<div className={style['input-box']}>
								<label htmlFor='username'>Username</label>
								<input
									type='text'
									id='username'
									placeholder='Enter your Username'
								/>
							</div>
							<div className={style['input-box']}>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									id='password'
									placeholder='••••••••••••'
								/>
							</div>
						</div>
						<Button type={'primary'}>Login</Button>
					</form>
					<div className={style.or}>
						<div className={style.breaker}>
							<p>or</p>
						</div>
						<div className={style.btns}>
							<Button type={'secondary'}>Login With Google</Button>
							<Button type={'secondary'}>Login With Appe</Button>
							<p>
								Don't have an account?<Link to={'/register'}>Register</Link>
							</p>
						</div>
					</div>
				</div>
			</SectionBox>
		</Section>
	);
};
export default LoginPage;

const LoginAction = (params) => {
	
}