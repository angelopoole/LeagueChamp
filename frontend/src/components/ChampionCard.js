import React from 'react';
import { Card } from 'react-bootstrap';

const ChampionCard = ({ champion }) => {
	console.log(champion);
	return (
		<Card>
			<div>{champion.name}</div>
		</Card>
	);
};

export default ChampionCard;
