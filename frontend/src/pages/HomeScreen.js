import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import ChampionCard from '../components/ChampionCard';

const HomeScreen = () => {
	const champions = useSelector(state => state.champions.champions);
	// const { loading, error, champions } = champions;
	// console.log(champions);
	return (
		<div>
			<main>
				<Row>
					{champions.map(champion => (
						<Col key={champion.id} sm={12} md={6} lg={4} xl={3}>
							<ChampionCard champion={champion} />
						</Col>
					))}
				</Row>
			</main>
		</div>
	);
};

export default HomeScreen;
