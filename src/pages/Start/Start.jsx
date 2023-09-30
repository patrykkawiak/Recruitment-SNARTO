import { Link } from 'react-router-dom';
import style from './Start.module.scss';
import IntroSliderText from '../../components/layouts/IntroSlider/IntroSliderText';
import Button from '../../components/UI/Button/Button';
import LeftArrow from '../../assets/svg/LeftArrow';
import Section from '../../components/UI/Section/Section';
import SectionBox from '../../components/UI/SectionBox/SectionBox';
const StartPage = () => {
	return (
		<Section>
			<SectionBox>
				<div className={style.link}>
					<Link to={'/'}>
						<LeftArrow />
					</Link>
				</div>
				<div className={style.content}>
					<IntroSliderText
						title={'Welcome to UpTodo'}
						excerpt={
							'Please login to your account or create new account to continue'
						}
					/>
					<div className={style.btns}>
						<Button type={'primary'}>
							<Link to={'/login'}>LOGIN</Link>
						</Button>
						<Button type={'secondary'}>
							<Link to={'/register'}>CREATE ACCOUNT</Link>
						</Button>
					</div>
				</div>
			</SectionBox>
		</Section>
	);
};
export default StartPage;
