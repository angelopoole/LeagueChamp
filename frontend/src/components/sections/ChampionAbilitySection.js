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

const ChampionAbilitySection = ({ passive, abilities, loading, version }) => {
  const [description, setDescription] = useState({
    status: 'loading',
    body: 'loadingBody',
    name: 'loadingName',
  });
  useEffect(() => {
    if (loading === false && passive) {
      setDescription({ ...description, body: passive.description, name: passive.name });
    }
  }, [loading, passive]);

  const setAbilityDescription = (abilityDescription, abilityName) => {
    setDescription({ ...description, body: abilityDescription, name: abilityName });
  };

  return (
    <>
      {loading || !passive || !abilities ? (
        <Loader />
      ) : (
        <OverlayingRow>
          <AbilityCol onClick={() => setAbilityDescription(passive.description, passive.name)}>
            <AbilityImage
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${passive.image.full}`}
            />
            <h5>passive</h5>
          </AbilityCol>
          {abilities.map(ability => {
            return (
              <AbilityCol
                key={ability.name}
                onClick={() => setAbilityDescription(ability.description, ability.name)}>
                <AbilityImage
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${ability.image.full}`}
                />
                <h5>{ability.id.slice(-1)}</h5>
              </AbilityCol>
            );
          })}

          <Col md={6}>
            {description.name} <br />
            {description.body}
          </Col>
        </OverlayingRow>
      )}
    </>
  );
};

export default ChampionAbilitySection;
