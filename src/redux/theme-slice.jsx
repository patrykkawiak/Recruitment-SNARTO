import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: 'dark',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeDark(state) {
			state.theme = 'dark';
		},
		setThemeLight(state) {
			state.theme = 'light';
		},
	},
});

export default themeSlice;

export const ThemeActions = themeSlice.actions;
