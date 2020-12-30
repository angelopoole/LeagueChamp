import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Form, Row } from 'react-bootstrap';
import ChampionCard from '../components/ChampionCard';
import Loader from '../components/Loader';
import { getAllChampions } from '../Redux/Actions/championAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const champs = useSelector(state => state.champions);
  const [filter, setFilter] = useState('');
  let { error, loading, champions } = champs;

  useEffect(() => {
    if (champions.length === 0) {
      dispatch(getAllChampions());
    }
  }, [dispatch, champions.length]);

  const filterChampsHandler = e => {
    setFilter(([e.target.name] = e.target.value));
  };

  let filterOutChampions = champions.filter(champ =>
    champ.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <Form style={{ marginTop: '15px' }}>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="Search Champs"
              name="filter"
              onChange={e => filterChampsHandler(e)}
            />
          </Col>
        </Form.Row>
      </Form>
      <main>
        {loading ? (
          <Loader>loader: {loading}...</Loader>
        ) : error ? (
          <div> message: {error}! </div>
        ) : (
          <>
            <Row sm={2}>
              {filterOutChampions.map(champion => (
                <Col key={champion.id} sm={1} md={6} lg={4} xl={3}>
                  <ChampionCard champion={champion} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </main>
    </div>
  );
};

export default HomeScreen;
