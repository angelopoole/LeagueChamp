/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const ImageWrapper = styled(Image)`
  align-content: center;
`;
const OverLayRow = styled(Row)`
  text-align: center;
`;

const ChampionAbilitySection = ({ passive, abilities }) => {
  console.log(passive);
  console.log(abilities);

  const abilityImages = abilities.map(ability => (
    <Col>
      <ImageWrapper
        src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${ability.image.full}`}
      />
    </Col>
  ));

  return (
    <>
      <OverLayRow>{abilityImages}</OverLayRow>
    </>
  );
};

export default ChampionAbilitySection;
