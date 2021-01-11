/* eslint-disable no-nested-ternary */
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
  const [difficultyFilter, setDifficultyFilter] = useState('');

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

  const difficultyFilterHandler = e => {
    setDifficultyFilter(([e.target.name] = e.target.value));
  };

  const filterOutChampions = () => {
    // If tag filter is active, we use a different method to filter out the champions
    const difficultyFilterconverstion = diff => {
      let arr = [];
      // difficulty filter returns 4,5 or 7
      if (diff === '4') {
        arr = [1, 2, 3];
      } else if (diff === '5') {
        arr = [4, 5, 6];
      } else if (diff === '7') {
        arr = [7, 8, 9, 10];
      }
      // console.log(arr);
      return arr;
    };

    const textFilteredArray = champions.filter(champ =>
      champ.name.toLowerCase().includes(filter.toLowerCase()),
    );

    // Use basic text filtering
    if (tagFilter === '' && difficultyFilter === '') {
      // no select filter in use
      return textFilteredArray;
    }
    if (tagFilter !== '' && difficultyFilter !== '') {
      //  both diff and tag filter in use
      return textFilteredArray.filter(
        champ =>
          champ.tags.includes(tagFilter) &&
          difficultyFilterconverstion(difficultyFilter).includes(champ.info.difficulty),
      );
    }
    if (tagFilter !== '' && difficultyFilter === '') {
      // if tag filter is only in use
      return textFilteredArray.filter(champ => champ.tags.includes(tagFilter));
    }
    if (difficultyFilter !== '' && tagFilter === '') {
      // if difficulty filter is only in use
      // !!!COMPLETE
      return textFilteredArray.filter(champ =>
        difficultyFilterconverstion(difficultyFilter).includes(champ.info.difficulty),
      );
    }
    // basereturn
    return textFilteredArray;
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

  console.log({ difficultyFilter, tagFilter, filter });

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
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              title={difficultyFilter}
              id="difficultyFilter"
              name="difficultyFilter"
              onChange={e => difficultyFilterHandler(e)}
              custom>
              <option value="">All Difficulties</option>
              <option value={4}>Easy</option>
              <option value={5}>Intermediate</option>
              <option value={7}>Hard</option>
            </Form.Control>

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
