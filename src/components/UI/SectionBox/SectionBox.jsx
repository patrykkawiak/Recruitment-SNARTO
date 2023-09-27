import style from './SectionBox.module.scss';

const SectionBox = ({children}) => {
	return <div className={style.box}>{children}</div>;
};
export default SectionBox;
