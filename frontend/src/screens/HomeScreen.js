import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Form, Row, Container } from 'react-bootstrap';

import ChampionCard from '../components/ChampionCard';
import Loader from '../components/Loader';
import { getAllChampions } from '../Redux/Actions/championAction';

//  #######################################
const HomeScreen = () => {
  const dispatch = useDispatch();
  const champs = useSelector(state => state.champions);
  const [filter, setFilter] = useState('');
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
    champ.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const displayCards = () => {
    let cards = null;
    if (loading) {
      cards = <Loader />;
    } else if (error) {
      cards = <div>error </div>;
    } else {
      cards = filterOutChampions.map(champion => (
        <Col
          key={champion.id}
          style={{ padding: '20px 20px 0px 0px', margin: '20px 20px 0px 0px' }}>
          <ChampionCard champion={champion} />
        </Col>
      ));
    }
    return cards;
  };

  return (
    <div>
      <Form style={{ marginTop: '15px' }}>
        <Form.Row>
          <Col>
            <Form.Control
              label="search champs"
              placeholder="Search Champs"
              name="filter"
              onChange={e => filterChampsHandler(e)}
            />
          </Col>
        </Form.Row>
      </Form>
      <main>
        <Container variant="dark">
          <Row lg={5} md={4} sm={2} noGutters>
            {displayCards()}
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default HomeScreen;
