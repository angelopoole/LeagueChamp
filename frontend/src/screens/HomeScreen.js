/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Col,
  Form,
  Row,
  Container,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
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
  const [difficultyFilter, setDifficultyFilter] = useState('All Difficulties');

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
    // If tag filter is active, we use a different method to filter out the champions

    // console.log(
    //   champions.map(champ =>
    //     champ.info.difficulty < 4
    //       ? 'easy'
    //       : champ.info.difficulty <= 4 && champ.info.difficulty < 7
    //       ? 'intermediate'
    //       : 'Hard',
    //   ),
    // );

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

  const logger = e => {
    console.log(e);
  };

  return (
    <div>
      <Form style={{ marginTop: '15px' }}>
        <Form.Row style={{ flexFlow: 'noWrap', margin: '15px 15px 15px 15px' }}>
          <FormControlCol xs={4}>
            <Form.Control
              style={{ top: '30px' }}
              label="search champs"
              placeholder="Search Champs"
              name="filter"
              onChange={e => filterChampsHandler(e)}
            />
          </FormControlCol>
          <FormControlCol>
            <FormButtonsContainer xs={6}>
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
            {/*  */}
            {/*  */}
            {/*  */}
            <DropdownButton
              title={difficultyFilter}
              // onSubmit={e => e.preventDefault()}
              // onSelect={e => e.preventDefault()}
            >
              <Dropdown.Item as="button" onSelect={e => e.preventDefault()} value="">
                All Difficultys
              </Dropdown.Item>
              <Dropdown.Item as="button" onSelect={e => e.preventDefault()} value="Easy">
                Easy
              </Dropdown.Item>
              <Dropdown.Item as="button" onSelect={e => e.preventDefault()} value="Medium">
                Medium
              </Dropdown.Item>
              <Dropdown.Item as="button" onSelect={e => e.preventDefault()} value="Hard">
                Hard
              </Dropdown.Item>
            </DropdownButton>
            {/*  */}
            {/*  */}
            {/*  */}
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
