import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import SwapiService from '../../services/SwapiService';
import {SwapiProvider} from '../swapiContext';
import './App.css';

export default class App extends React.Component {
  swapi = new SwapiService();

  render() {
  
    return (
      <ErrorBoundry>
        <SwapiProvider value={this.swapi}>
          <div>
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
};
