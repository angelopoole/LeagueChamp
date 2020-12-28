import { useEffect } from 'react';

//comp
import { Container, Image } from 'react-bootstrap';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { getChampionById } from '../Redux/Actions/championAction';

const ChampionDetailScreen = ({ match }) => {
	const dispatch = useDispatch();
	const champId = match.params.id;

	useEffect(() => {
		dispatch(getChampionById(champId));
	}, [dispatch, champId]);

	let currentChampion = useSelector(state => state.championDetails);
	let { error, loading, currentChamp } = currentChampion;

	console.log(currentChamp.name);

	return (
		<Container>
			<Container>
				<Image src={``} rounded />
			</Container>
		</Container>
	);
};

export default ChampionDetailScreen;
