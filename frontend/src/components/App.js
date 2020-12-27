//libs
import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Layout from './Layout';
import HomeScreen from '../pages/HomeScreen';
import ChampionDetailScreen from '../pages/ChampionDetailScreen';

//redux
import { getAllChampions } from '../Redux/Actions/championAction';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllChampions());
	}, [dispatch]);

	return (
		<Router>
			<Layout>
				<Route path='/' component={HomeScreen} exact />
				<Route path='/champion/:id' component={ChampionDetailScreen} />
			</Layout>
		</Router>
	);
}

/* <Route path='/order/:id' component={OrderScreen} /> */

export default App;
