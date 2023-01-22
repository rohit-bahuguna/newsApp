import React, { useEffect, useState } from 'react';
import { getTopNews } from '../utils/fetchNew';
import Header from './common/Header';
import ShowArticles from './pages/ShowArticles';
import { useDispatch, useSelector  } from 'react-redux';
import { getArticleData } from '../store/actions';
const Home = () => {
	
	const dispatch = useDispatch()
	const topNews = useSelector((state) => state.allArticles.articles)
	
	useEffect(() => {
		getTopNews().then(res => dispatch(getArticleData(res.data.articles)));
	}, []);


	return (
		<>
			<Header/>
			<div className="max-w-6xl mx-auto">
		<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
			{topNews &&
				topNews.map((value, index) => {
					return <ShowArticles article={value} key={value + index} />;
				})}
		</main>
	</div>
			
		</>
	);
};

export default Home;
