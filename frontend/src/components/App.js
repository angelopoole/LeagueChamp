//libs
import { useEffect } from 'react';

//components
import Layout from './Layout';
import HomeScreen from '../pages/HomeScreen';

//redux
import { getAllChampions } from '../Redux/Actions/championAction';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllChampions());
	}, [dispatch]);

	return (
		<Layout>
			<HomeScreen />
		</Layout>
	);
}

export default App;
