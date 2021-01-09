/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Form, Row, Container, Button, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';

import ChampionCard from '../components/ChampionCard';
import Loader from '../components/Loader';
import { getAllChampions } from '../Redux/Actions/championAction';

const FormControlCol = styled(Col)`
  margin: 20px 0px 0px 20px;
  flex-flow: nowrap;
`;

const FormButtons = styled(Button)`
  width: auto;
  text-transform: uppercase;
  flex-flow: nowrap;
`;

const FormButtonsContainer = styled(Row)`
  flex-flow: nowrap;
`;

//  #######################################
const HomeScreen = () => {
  // const width = window.innerWidth;

  // Redux
  const dispatch = useDispatch();
  const champs = useSelector(state => state.champions);

  // create filters for tag and filter.
  const [filter, setFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  // Grab champions from redux state
  const { error, loading, champions } = champs;

  useEffect(() => {
    if (champions.length === 0) {
      dispatch(getAllChampions());
    }
  }, [dispatch, champions.length]);

  const filterChampsHandler = e => {
    setFilter(([e.target.name] = e.target.value));
  };

  const filterOutChampions = () => {
    // get two seperate array, reference eachother to get array of things to show
    // combine these two arrays as long as the champion is in common
    if (tagFilter === '') {
      return champions.filter(champ => champ.name.toLowerCase().includes(filter.toLowerCase()));
    }
    return champions.filter(
      champ =>
        champ.name.toLowerCase().includes(filter.toLowerCase()) && champ.tags.includes(tagFilter),
    );
  };

  const setFilterByTag = tag => {
    setTagFilter(tag);
  };

  const displayCards = arrayOfChamps => {
    let cards = null;
    if (loading) {
      cards = <Loader />;
    } else if (error) {
      cards = <div>error </div>;
    } else {
      cards = arrayOfChamps().map(champion => (
        <Container>
          <Col
            key={champion.id}
            style={{ padding: '20px 20px 0px 0px', margin: '20px 20px 0px 0px' }}>
            <ChampionCard champion={champion} />
          </Col>
        </Container>
      ));
    }
    return cards;
  };

  console.log(champions.map(champ => champ.info.difficulty));

  return (
    <div>
      <Form style={{ marginTop: '15px' }}>
        <Form.Row style={{ flexFlow: 'noWrap' }}>
          <FormControlCol xs={3}>
            <Form.Control
              style={{ top: '30px' }}
              label="search champs"
              placeholder="Search Champs"
              name="filter"
              onChange={e => filterChampsHandler(e)}
            />
          </FormControlCol>
          <FormControlCol>
            <FormButtonsContainer xs={7}>
              <ButtonGroup>
                <FormButtons
                  variant={tagFilter === '' ? 'info' : 'secondary'}
                  onClick={() => setFilterByTag('')}>
                  all
                </FormButtons>
                <FormButtons
                  variant={tagFilter === 'Assassin' ? 'info' : 'secondary'}
                  onClick={() => setFilterByTag('Assassin')}>
                  assasins
                </FormButtons>
                <FormButtons
                  variant={tagFilter === 'Fighter' ? 'info' : 'secondary'}
                  onClick={() => setFilterByTag('Fighter')}>
                  fighters
                </FormButtons>
                <FormButtons
                  variant={tagFilter === 'Mage' ? 'info' : 'secondary'}
                  onClick={() => setFilterByTag('Mage')}>
                  mage
                </FormButtons>
                <FormButtons
                  variant={tagFilter === 'Marksman' ? 'info' : 'secondary'}
                  onClick={() => setFilterByTag('Marksman')}>
                  marksmen
                </FormButtons>
                <FormButtons
                  variant={tagFilter === 'Support' ? 'info' : 'secondary'}
                  onClick={() => setFilterByTag('Support')}>
                  support
                </FormButtons>
              </ButtonGroup>
            </FormButtonsContainer>
          </FormControlCol>
          <FormControlCol>
            <Form.Control
              style={{ top: '30px' }}
              label="seach by difficulty"
              placeholder="seach by difficulty"
              name="filter"
              onChange={e => filterChampsHandler(e)}
            />
          </FormControlCol>
        </Form.Row>
      </Form>
      <main>
        <Row lg={5} md={4} sm={3} xs={1}>
          {displayCards(filterOutChampions)}
        </Row>
      </main>
    </div>
  );
};

export default HomeScreen;
