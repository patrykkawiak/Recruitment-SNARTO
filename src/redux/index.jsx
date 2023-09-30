import { configureStore } from '@reduxjs/toolkit';
import sliderSlice from './slider-slice';
import themeSlice from './theme-slice';

const store = configureStore({
	reducer: {
		slider: sliderSlice.reducer,
		theme: themeSlice.reducer,
	},
});

export default store;
