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

  // const carouselItems = () => {
  //   let items = null;
  //   if (loading) {
  //     items = <Loader />;
  //   } else if (error) {
  //     items = <div>error </div>;
  //   } else {
  //     items = currentChamp.skins.map(skin => (
  //       <Carousel.Item key={skin.id}>
  //         <StyledImageContainer
  //           src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${paramsChampId}_${skin.num}.jpg`}
  //         />
  //         <Carousel.Caption> {skin.name}! </Carousel.Caption>
  //       </Carousel.Item>
  //     ));
  //   }
  //   return items;
  // };

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
  // console.log(spells.map(spell => console.log(spell)));

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

// allytips: (3) ["Use Charm to set up your combos, it will make land…rb of Deception and Fox-Fire dramatically easier.", "Initiate team fights using Charm, and chase down stragglers with Spirit Rush.", "Spirit Rush enables Ahri's abilities, it opens up …of Deception, and closes to make use of Fox-Fire."]

// blurb: "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature..."

// enemytips: (2) ["Ahri's survivability is dramatically reduced when her Ultimate, Spirit Rush, is down.", "Stay behind minions to make Charm difficult to lan…ill reduce Ahri's damage potential significantly."]

// id: "Ahri"

// image: {full: "Ahri.png", sprite: "champion0.png", group: "champion", x: 48, y: 0, …}

// info: {attack: 3, defense: 4, magic: 8, difficulty: 5}
// key: "103"
// lore: "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes."
// name: "Ahri"
// partype: "Mana"
// passive: {name: "Essence Theft", description: "When Ahri strikes 9 enemies with her abilities, her next ability also heals her for each enemy hit.", image: {…}}
// recommended: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// skins: (14) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// spells: (4) [{…}, {…}, {…}, {…}]
// stats: {hp: 526, hpperlevel: 92, mp: 418, mpperlevel: 25, movespeed: 330, …}
// tags: (2) ["Mage", "Assassin"]
// title: "the Nine-Tailed Fox"
