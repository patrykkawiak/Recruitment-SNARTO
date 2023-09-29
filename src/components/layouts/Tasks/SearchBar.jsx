import Search from '../../../assets/svg/Search';
import style from './SearchBar.module.scss';

const SearchBar = ({ searchData }) => {
	return (
		<div className={style['search-box']}>
			<Search />
			<input
				type='text'
				className={style.search}
				placeholder='Search for your task...'
				onChange={searchData}
			/>
		</div>
	);
};
export default SearchBar;
