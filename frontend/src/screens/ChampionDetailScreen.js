/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// comp
import { Image, Carousel, Container, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Loader from '../components/Loader';
import ChampionAbilitySection from '../components/sections/ChampionAbilitySection';
import ChampionHero from '../components/sections/ChampionHero';
import SkinsCarousel from '../components/sections/SkinsCarousel';

// redux
import { getChampionById } from '../Redux/Actions/championAction';

// styled Components

const ChampionHeader = styled.h1`
  margin: auto;
  margin-bottom: 50px;
  margin-top: -80px;
  width: 50%;
  text-align: center;
  color: gold;
  font-style: italic;
  background-color: rgba(0, 0, 0, 0.13);
  border-radius: var(--border-radius);
`;

const StyledCol = styled(Col)`
  background-color: var(--gray-dark);
  border-radius: var(--border-radius);
  color: white;
  strong {
    text-align: center;
  }
`;

const OuterContainer = styled(Container)`
  color: white;
`;

const AbilityImageRow = styled(Row)`
  background-color: grey;
`;

const AbilityContainer = styled(Container)`
  background-color: blue;
`;

// component begin
const ChampionDetailScreen = ({ match }) => {
  const dispatch = useDispatch();
  const paramsChampId = match.params.id;
  const currentChampion = useSelector(state => state.championDetails);
  const { error, loading, currentChamp } = currentChampion;

  useEffect(() => {
    if (!currentChamp.key || currentChamp.id !== paramsChampId) {
      dispatch(getChampionById(paramsChampId));
    }
  }, [dispatch, paramsChampId, currentChamp.id, currentChamp.key]);

  const {
    allytips,
    blurb,
    enemytips,
    id,
    image,
    info,
    key,
    lore,
    name,
    partype,
    passive,
    recomended,
    skins,
    spells,
    stats,
    tags,
    title,
  } = currentChamp;

  return (
    <>
      <ChampionHero id={id} />
      <ChampionHeader>
        <Col>
          {name} <br />
          {title}
        </Col>
      </ChampionHeader>
      <SkinsCarousel key={key} skins={skins} loading={loading} error={error} match={match} />
      <OuterContainer>
        <ChampionAbilitySection key={key} passive={passive} abilities={spells} loading={loading} />

        <Row>
          <StyledCol className="tips">{name}</StyledCol>
        </Row>
        <Row>
          <StyledCol className="tips">
            <strong>Enemy Tips</strong>
            {allytips.map(tip => (
              <Row key={allytips.indexOf(tip)}>--{tip}</Row>
            ))}
          </StyledCol>
          <StyledCol className="tips" style={{ borderStyle: 'none none none solid' }}>
            <strong>Ally tips</strong>
            {enemytips.map(tip => (
              <Row key={enemytips.indexOf(tip)}> --{tip}</Row>
            ))}
          </StyledCol>
        </Row>
      </OuterContainer>
    </>
  );
};

ChampionDetailScreen.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ChampionDetailScreen;
