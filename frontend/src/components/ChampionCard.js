import React from 'react';
import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';

const TransparentContainer = styled(Container)`
	background-color: rgba(203, 235, 235, 0.59);
	height: 100%;
	color: black;
`;

const HoverContainer = styled(Container)`
	#wholeCard:hover {
		#transContainer {
			background-color: transparent;
			color: transparent;
			cursor: pointer;
		}
	}
`;

// http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg

const ChampionCard = ({ champion }) => {
	console.log(champion);
	return (
		<HoverContainer>
			<Card className='p-3 m-3' border='secondary' id='wholeCard'>
				<Card.Img
					className='img'
					src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
				/>
				<Card.ImgOverlay>
					<TransparentContainer fluid id='transContainer'>
						<Card.Title className='h1'>{champion.name}</Card.Title>
						<Card.Body>{champion.blurb}</Card.Body>
						<Card.Subtitle>{champion.title}</Card.Subtitle>
					</TransparentContainer>
				</Card.ImgOverlay>
			</Card>
		</HoverContainer>
	);
};

export default ChampionCard;

// blurb: "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on..."
// id: "Samira"
// image: {full: "Samira.png", sprite: "champion3.png", group: "champion", x: 48, y: 48, …}
// info: {attack: 8, defense: 5, magic: 3, difficulty: 6}
// key: "360"
// name: "Samira"
// partype: "Mana"
// stats: {hp: 530, hpperlevel: 88, mp: 348.88, mpperlevel: 38, movespeed: 335, …}
// tags: ["Marksman"]
// title: "the Desert Rose"
// version: "10.25.1"
