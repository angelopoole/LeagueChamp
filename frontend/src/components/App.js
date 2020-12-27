//libs
import { useEffect, useState } from 'react';

//components
import Layout from './Layout';
import HomeScreen from '../pages/HomeScreen';

//redux
import { getAllChampions } from '../Redux/Actions/championAction';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const champions = useSelector(state => state.championReducer);

	useEffect(() => {
		dispatch(getAllChampions());
	}, []);

	return (
		<Layout>
			<HomeScreen />
		</Layout>
	);
}

export default App;
