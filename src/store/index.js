import { actionTypes } from './constants';
import { combineReducers } from 'redux';

const initialState = {
	articles: []
};

const articlesReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.GET_ALL_ARTICLES:
			return { ...state, articles: [...payload] };

		default:
			return state;
	}
};

const initialMode = 'light';
const modeReducer = (state = initialMode, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.SET_MODE:
			console.log(payload);
			return { initialMode: payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	allArticles: articlesReducer,
	mode: modeReducer
});

export default reducers;
