/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import PassiveCard from '../PassiveCard';

const ImageWrapper = styled(Image)`
  align-content: center;
`;
const OverLayRow = styled(Row)`
  text-align: center;
`;

const ChampionAbilitySection = ({ passive, abilities }) => {
  const abilityImages = abilities.map(ability => (
    <Col key={ability.id}>
      <ImageWrapper
        src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${ability.image.full}`}
      />
    </Col>
  ));

  return (
    <>
      <OverLayRow>
        <Col>
          <PassiveCard passive={passive} />
        </Col>
        {abilityImages}
      </OverLayRow>
    </>
  );
};

export default ChampionAbilitySection;
