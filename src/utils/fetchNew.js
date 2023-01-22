import { keyboard } from '@testing-library/user-event/dist/keyboard';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;
const apikey = process.env.API_KEY;
// GET

console.log(baseUrl, apikey);

export const getTopNews = async () => {
	const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=811124b767624f74b2d0cdf9a3c295d2`;
	return await axios.get(url);
};

export const getNewsBasedUponKeyword = async Keyword => {
	const url = `https://newsapi.org/v2/everything?q=${Keyword}&apiKey=811124b767624f74b2d0cdf9a3c295d2`;
	return await axios.get(url);
};
