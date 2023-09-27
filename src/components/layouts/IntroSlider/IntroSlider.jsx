import { Link } from 'react-router-dom/dist';
import FirstSliderImg from '../../../assets/img/intro/intro1.png';
import SecondSliderImg from '../../../assets/img/intro/intro2.png';

import styles from './IntroSlider.module.scss';
import IntroSliderText from './IntroSliderText';
import Button from '../../UI/Button/Button';
import PlainButton from '../../UI/PlainButton/PlainButton';
import IntroSliderDot from './IntroSliderDot';

const IntroSlider = () => {
	const box = document.querySelector(`.${styles['slider-box']}`);
	const handleSecondSlide = () => {
		const viewPortWidth = window.innerWidth;
		box.style.transform = `translateX(-${viewPortWidth}px)`;
	};
	const handleFirstSlide = () => {
		box.style.transform = `translateX(0)`;
	};

	return (
		<section className={styles.slider}>
			<div className={styles['slider-box']}>
				<div className={styles['slider-item']}>
					<div className={styles['slider-temp']}>
						<Link to={'/start'} className={styles['slider-link']}>
							Skip
						</Link>
						<div className={styles['slider-ctn']}>
							<img
								src={FirstSliderImg}
								alt='image shows manage time and tasks'
							/>
							<div className={styles['slider-dots']}>
								<IntroSliderDot variant={'active'} />
								<IntroSliderDot variant={'deactive'} />
							</div>
						</div>
						<IntroSliderText
							title={'Manage your tasks'}
							excerpt={
								'You can easily manage all of your daily tasks in DoMe for free'
							}
						/>
						<div className={styles['slider-btns']}>
							<PlainButton>back</PlainButton>
							<Button type={'primary'} onClick={handleSecondSlide}>
								next
							</Button>
						</div>
					</div>
				</div>
				<div className={styles['slider-item']}>
					<div className={styles['slider-temp']}>
						<Link to={'/start'} className={styles['slider-link']}>
							Skip
						</Link>
						<div className={styles['slider-ctn']}>
							<img
								src={SecondSliderImg}
								alt='image shows calendar which symbols time managment'
							/>
							<div className={styles['slider-dots']}>
								<IntroSliderDot variant={'deactive'} />
								<IntroSliderDot variant={'active'} />
							</div>
						</div>
						<IntroSliderText
							title={'Create daily routine'}
							excerpt={
								'In Uptodo you can create your personalized routine to stay productive'
							}
						/>
						<div className={styles['slider-btns']}>
							<PlainButton onClick={handleFirstSlide}>back</PlainButton>
							<Button type={'primary'}>
								<Link to={'/start'}>Next</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroSlider;
