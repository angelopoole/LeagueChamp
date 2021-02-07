/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Card, Image, Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Loader from '../Loader';

const AbilityImage = styled(Image)`
  background-color: red;
`;

const AbilityCol = styled(Col)``;

const OverlayingRow = styled(Row)`
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${AbilityCol}:hover {
    transition: var(--transition);
    background-color: red;
  }
`;

const ChampionAbilitySection = ({ passive, abilities, loading }) => {
  const [description, setDescription] = useState();

  console.log(passive, abilities, loading);
  // TODO : put ability col's into a render method rather than hardcoding it.
  // console.log(abilities[0].image.full);

  return (
    <>
      {loading || !passive || !abilities ? (
        <Loader />
      ) : (
        <OverlayingRow>
          <AbilityCol>
            <AbilityImage
              src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/passive/${passive.image.full}`}
            />
            passive
          </AbilityCol>
          <AbilityCol>
            <AbilityImage
              src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${abilities[0].image.full}`}
            />
            Q
          </AbilityCol>
          <AbilityCol>
            <AbilityImage
              src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${abilities[1].image.full}`}
            />
            W
          </AbilityCol>
          <AbilityCol>
            <AbilityImage
              src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${abilities[2].image.full}`}
            />
            E
          </AbilityCol>
          <AbilityCol>
            <AbilityImage
              src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${abilities[3].image.full}`}
            />
            R
          </AbilityCol>
          <Col md={6}>{description}</Col>
        </OverlayingRow>
      )}
    </>
  );
};

export default ChampionAbilitySection;
