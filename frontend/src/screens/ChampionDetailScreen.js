/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// comp
import { Image, Carousel, Container, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Loader from '../components/Loader';
import ChampionAbilityCard from '../components/ChampionAbilityCard';
import ChampionHero from '../components/sections/ChampionHero';
import SkinsCarousel from '../components/sections/SkinsCarousel';

// redux
import { getChampionById } from '../Redux/Actions/championAction';

// styled Components

const StyledCol = styled(Col)`
  background-color: var(--gray-dark);
  border-radius: var(--border-radius);
  color: white;
  strong {
    text-align: center;
  }
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
      console.log('object');
    }
  }, [dispatch, paramsChampId]);

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

  const spellCards = loading ? (
    <Loader />
  ) : (
    spells.map(spell => (
      <Col key={spell.id} className="col-sm-2">
        <ChampionAbilityCard spell={spell} />
      </Col>
    ))
  );

  console.log(currentChamp);

  return (
    <Container style={{ margin: 'auto' }}>
      <ChampionHero id={id} />

      <SkinsCarousel skins={skins} loading={loading} error={error} match={match} />
      <Container>
        <Row style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
          <Col>{title}</Col>
        </Row>
        <Row
          className="justify-content-center"
          style={{ margin: 'auto', width: '100vh', height: '100%' }}>
          <Col className="col-sm-2">
            <ChampionAbilityCard passive={passive} />
          </Col>
          {spellCards}
        </Row>
        <Row>
          <StyledCol className="tips">
            {allytips.map(tip => (
              <Row>--{tip}</Row>
            ))}
          </StyledCol>
          <StyledCol className="tips" style={{ borderStyle: 'none none none solid' }}>
            <strong>Ally tips</strong>
            {enemytips.map(tip => (
              <Row> --{tip}</Row>
            ))}
          </StyledCol>
        </Row>
      </Container>
    </Container>
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
