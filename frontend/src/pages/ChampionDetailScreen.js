import { useEffect, useRef } from 'react';

//comp
import { Image, Carousel, Container } from 'react-bootstrap';
import Loader from '../components/Loader';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { getChampionById } from '../Redux/Actions/championAction';
import styled from 'styled-components';

// styled Components
const StyledImageContainer = styled(Image)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

// component begin
const ChampionDetailScreen = ({ match }) => {
  const dispatch = useDispatch();
  const paramsChampId = match.params.id;
  let currentChampion = useSelector(state => state.championDetails);
  let { error, loading, currentChamp } = currentChampion;

  useEffect(() => {
    if (!currentChamp.id || currentChamp.id !== paramsChampId) {
      dispatch(getChampionById(paramsChampId));
    }
  }, [dispatch, currentChamp.id, paramsChampId]);

  return (
    <Container style={{ margin: '20px auto' }}>
      {loading ? (
        <Loader> {loading} </Loader>
      ) : error ? (
        <div>error message {error} </div>
      ) : (
        <Carousel animation="false">
          {loading ? (
            <div> loading </div>
          ) : (
            currentChamp.skins.map(skin => (
              <Carousel.Item key={skin.id}>
                <StyledImageContainer
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${paramsChampId}_${skin.num}.jpg`}
                />
                <Carousel.Caption> {skin.name}! </Carousel.Caption>
              </Carousel.Item>
            ))
          )}
        </Carousel>
      )}
    </Container>
  );
};

// <Carousel.Item>
// 								<StyledImageContainer
// 									src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${paramsChampId}_${skins.num}.jpg`}
// 								/>
// 							</Carousel.Item>

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
