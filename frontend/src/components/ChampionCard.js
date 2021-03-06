import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { LinkContainer } from 'react-router-bootstrap';

const WhiteTabBox = styled.div`
  content: '  ';
  position: absolute;
  top: 0px;
  right: 0px;
  width: 11%;
  padding-top: 11%;
  background-color: white;
  transition: transform 0.5s ease 0s;
  transform: translate(50%, -50%) rotate(45deg);
  z-index: 10;
`;
const TitleCard = styled.div`
  transition: var(--transition);
  color: white;
  padding: 5px 0px 5px 5px;
  background-color: black;
  width: 200px;
  margin: auto;
  text-transform: uppercase;
  font-style: italic;
`;
const HoverContainer = styled(Container)`
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: left;
  transition: var(--transition);

  @keyframes fadeInAnimation {
    0% {
      content: '';
      transform: translate(0px, 10px);
      opacity: 0;
    }
    100% {
      transition-delay: 250ms;
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  #wholeCard {
    cursor: pointer;
    overflow: hidden;
    height: 200px;
    width: 200px;
    margin: auto;
    transition: var(--transition);
    border-color: transparent;
  }
  #image {
    transition: var(--transition);
    object-fit: cover;
    object-position: 20% 10%;
    width: '100%';
  }

  #wholeCard:hover {
    #image {
      transform: scale3d(1.05, 1.05, 1);
    }
    ${WhiteTabBox} {
      transition: var(--transition);
      background-color: white;
      transform: translate(120px, -50%);
    }
    + ${TitleCard} {
      transition: var(--transition);
      color: gold;
    }
  }
`;

// @TODO
// figure out a way to generate an overlay trigger that gives info on a champion
const ChampionCard = ({ champion }) => {
  const {
    // blurb,
    id,
    // image,
    // info,
    // key,
    name,
    // partype,
    // stats,
    // tags,
    // title,
    // version,
  } = champion;

  return (
    <LinkContainer to={`champion/${id}`}>
      <HoverContainer>
        <Card id="wholeCard">
          <WhiteTabBox />
          <Card.Img
            className="img"
            alt={name}
            id="image"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
          />
        </Card>
        <TitleCard>{name}</TitleCard>
      </HoverContainer>
    </LinkContainer>
  );
};

ChampionCard.propTypes = {
  champion: PropTypes.shape({
    blurb: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.shape({
      full: PropTypes.string,
      group: PropTypes.string,
      h: PropTypes.number,
      sprite: PropTypes.string,
      w: PropTypes.number,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    info: PropTypes.shape({
      attack: PropTypes.number,
      defense: PropTypes.number,
      difficulty: PropTypes.number,
      magic: PropTypes.number,
    }),
    key: PropTypes.string,
    name: PropTypes.string,
    partype: PropTypes.string,
    stats: PropTypes.shape({
      armor: PropTypes.number,
      armorperlevel: PropTypes.number,
      attackdamage: PropTypes.number,
      attackdamageperlevel: PropTypes.number,
      attackrange: PropTypes.number,
      attackspeed: PropTypes.number,
      attackspeedperlevel: PropTypes.number,
      crit: PropTypes.number,
      critperlevel: PropTypes.number,
      hp: PropTypes.number,
      hpperlevel: PropTypes.number,
      hpregen: PropTypes.number,
      hpregenperlevel: PropTypes.number,
      movespeed: PropTypes.number,
      mp: PropTypes.number,
      mpperlevel: PropTypes.number,
      mpregen: PropTypes.number,
      mpregenperlevel: PropTypes.number,
      spellblock: PropTypes.number,
      spellblockperlevel: PropTypes.number,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    version: PropTypes.string,
  }).isRequired,
};

export default ChampionCard;
