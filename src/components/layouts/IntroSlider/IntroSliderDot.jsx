import styles from './IntroSliderDot.module.scss';

const IntroSliderDot = ({ variant }) => {
	return <div className={`${styles.dot} ${styles[`dot-${variant}`]}`}></div>;
};
export default IntroSliderDot;
