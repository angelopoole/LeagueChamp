/* eslint-disable no-unused-vars */

import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const ImageWrapper = styled(Card.Img)`
  /* height: 100px; */
  /* width: 100%; */
  /* size: 100px; */
`;

const ChampionAbilityCards = ({ spell, passive }) => {
  let card = null;

  if (spell) {
    const {
      cooldown,
      cooldownBurn,
      cost,
      costBurn,
      costType,
      datavalues,
      description,
      effect,
      effectBurn,
      id,
      image,
      leveltip,
      maxammo,
      maxrank,
      name,
      range,
      rangeBurn,
      resource,
      tooltip,
    } = spell;

    card = (
      <Card className="h-100">
        <Card.Title style={{ height: '30px', textAlign: 'center' }}>{name}</Card.Title>
        <ImageWrapper
          src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${image.full}`}
        />
      </Card>
    );
  } else if (passive) {
    const { description, image, name } = passive;

    card = (
      <Card className=" h-100">
        <Card.Title style={{ height: '30px', textAlign: 'center' }}>{name}</Card.Title>
        <Card.Img
          src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/passive/${image.full}`}
        />
      </Card>
    );
  }

  return <Card>{card}</Card>;
};

export default ChampionAbilityCards;
