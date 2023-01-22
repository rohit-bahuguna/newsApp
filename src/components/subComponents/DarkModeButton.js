import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
// import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../store/actions';
function DarkModeButton() {
	//const [theme, setTheme] = useState('light');
	const theme = useSelector(state => state.mode);
	console.log(theme.initialMode, 'darkbutton');
	const dispatch = useDispatch();
	return (
		<div>
			{theme.initialMode === 'dark'
				? <SunIcon
						className="h-8 w-8 cursor-pointer text-yellow-500"
						onClick={() => dispatch(setMode('light'))}
					/>
				: <MoonIcon
						className="h-8 w-8 cursor-pointer text-gray-900"
						onClick={() => dispatch(setMode('dark'))}
					/>}
		</div>
	);
}

export default DarkModeButton;
