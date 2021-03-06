// libs
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

// components
import Layout from './Layout';
import HomeScreen from '../screens/HomeScreen';
import ChampionDetailScreen from '../screens/ChampionDetailScreen';

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/champion/:id" component={ChampionDetailScreen} />
      </Layout>
    </Router>
  );
}

/* <Route path='/order/:id' component={OrderScreen} /> */

export default App;
