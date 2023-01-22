import { actionTypes } from './constants';

export const getArticleData = data => {
	return {
		type: actionTypes.GET_ALL_ARTICLES,
		payload: data
	};
};

export const setMode = mode => {
	console.log(mode);
	return {
		type: actionTypes.SET_MODE,
		payload: mode
	};
};
