import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArticleData } from '../../store/actions';
import { getNewsBasedUponKeyword } from '../../utils/fetchNew';

function SearchBox() {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const handleSearch = e => {
		e.preventDefault();
		getNewsBasedUponKeyword(input).then(res => {
			console.log(res);
			dispatch(getArticleData(res.data.articles));
		});
	};
	return (
		<form
			onSubmit={handleSearch}
			className="max-w-6xl mx-auto flex justify-between items-center px-5">
			<input
				type="text"
				value={input}
				onChange={e => setInput(e.target.value)}
				placeholder="Search Keywords...."
				className="w-full h-14 rounded-sm placeholder-gray-500 outline-none flex-1  bg-transparent dark:text-orange-400"
			/>

			<button
				type="submit"
				disabled={!input}
				className="text-orange-400 disabled:text-gray-400 ">
				Search
			</button>
		</form>
	);
}

export default SearchBox;
