import { useEffect } from 'react';

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

	// let key = Object.keys(currentChamp)[0]
	// let instanceChamp = currentChamp[key];
	console.log(currentChamp.name);

	// var newArrayDataOfOjbect = Object.values(data)
	// let newchamparr = Object.values(Object.keys(currentChamp)[0]);

	return <div> champion detail</div>;
};

export default ChampionDetailScreen;
