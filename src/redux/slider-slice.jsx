import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	index: 0,
};

const sliderSlice = createSlice({
	name: 'slider',
	initialState,
	reducers: {
		increaseIndex(state) {
			state.index = state.index + 1;
		},
		decreaseIndex(state) {
			state.index = state.index - 1;
		},
	},
});

export default sliderSlice;

export const SliderActions = sliderSlice.actions;
