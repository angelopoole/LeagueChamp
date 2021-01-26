/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Card, Image, Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

import PassiveCard from '../PassiveCard';

const ImageWrapper = styled(Image)`
  align-content: center;
`;
const OverLayRow = styled(Row)`
  text-align: center;
`;

const ChampionAbilitySection = ({ passive, abilities }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (passive) {
      setDescription(passive.description);
    }
  }, [passive]);

  const descriptionSetHandler = abilityDescription => {
    setDescription(abilityDescription);
  };

  // Render Methods ->
  const abilityImages = abilities.map(ability => (
    <Col key={ability.id}>
      <Container>
        <h4>{ability.name}</h4>
        <ImageWrapper
          onClick={() => descriptionSetHandler(ability.description)}
          src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${ability.image.full}`}
        />
      </Container>
    </Col>
  ));

  return (
    <>
      <OverLayRow>
        <Col>
          <PassiveCard passive={passive} descriptionSetHandler={descriptionSetHandler} />
        </Col>
        {abilityImages}
      </OverLayRow>
      <p>{description}</p>
    </>
  );
};

export default ChampionAbilitySection;
