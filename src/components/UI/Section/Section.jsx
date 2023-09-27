import style from './Section.module.scss';

const Section = ({ children, removePadding }) => {
	return (
		<section
			className={`${style.section} ${!removePadding && 'section-padding'}`}
		>
			{children}
		</section>
	);
};
export default Section;
