import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Form, Row, Container, Button } from 'react-bootstrap';
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
  const dispatch = useDispatch();
  const champs = useSelector(state => state.champions);
  const [filter, setFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  const { error, loading, champions } = champs;

  useEffect(() => {
    if (champions.length === 0) {
      dispatch(getAllChampions());
    }
  }, [dispatch, champions.length]);

  const filterChampsHandler = e => {
    setFilter(([e.target.name] = e.target.value));
  };

  const filterOutChampions = champions.filter(champ =>
    champ.name.toLowerCase().includes(filter.toLowerCase()) && tagFilter === ''
      ? null
      : champ.tags.includes(tagFilter),
  );

  // eslint-disable-next-line no-unused-vars
  const filterByTag = tag => {
    // let taggedChamps = null;
    setTagFilter(tag);
    // if (tag !== 'All') {
    // taggedChamps = filterOutChampions.filter(champ => champ.tags.includes(tagFilter));
    // } else {
    // taggedChamps = filterOutChampions;
    // }
    // filterOutChampions = taggedChamps;
  };

  const displayCards = arrayOfChamps => {
    let cards = null;
    if (loading) {
      cards = <Loader />;
    } else if (error) {
      cards = <div>error </div>;
    } else {
      cards = arrayOfChamps.map(champion => (
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
              {/* <ButtonGroup aria-label="Basic example"> */}
              <FormButtons variant="secondary" onClick={() => filterByTag('')}>
                all
              </FormButtons>
              <FormButtons variant="secondary" onClick={() => filterByTag('Assassin')}>
                assasins
              </FormButtons>
              <FormButtons variant="secondary" onClick={() => filterByTag('Fighter')}>
                fighters
              </FormButtons>
              <FormButtons variant="secondary" onClick={() => filterByTag('Mage')}>
                mage
              </FormButtons>
              <FormButtons variant="secondary" onClick={() => filterByTag('Marksman')}>
                marksmen
              </FormButtons>
              <FormButtons variant="secondary" onClick={() => setTagFilter('Support')}>
                support
              </FormButtons>
              {/* </ButtonGroup> */}
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
