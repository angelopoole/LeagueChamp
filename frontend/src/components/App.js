// libs
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

// components
import { Container } from 'react-bootstrap';
import Layout from './Layout';
import HomeScreen from '../screens/HomeScreen';
import ChampionDetailScreen from '../screens/ChampionDetailScreen';

function App() {
  return (
    <Router>
      <Container className="p-0 m-0">
        <Layout>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/champion/:id" component={ChampionDetailScreen} />
        </Layout>
      </Container>
    </Router>
  );
}

/* <Route path='/order/:id' component={OrderScreen} /> */

export default App;
