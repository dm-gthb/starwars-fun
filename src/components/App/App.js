import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import './App.css';
import ErrorBoundry from '../ErrorBoundry';
import PeoplePage from '../PeoplePage/PeoplePage';
import SwapiService from '../../services/SwapiService';

export default class App extends React.Component {
  swapi = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <div>
          <Header />
          <RandomPlanet />
          <PeoplePage />
        </div>
      </ErrorBoundry>
    );
  }
};
