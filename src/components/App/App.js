import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import './App.css';
import ErrorBoundry from '../ErrorBoundry';
// import PeoplePage from '../PeoplePage/PeoplePage';
import SwapiService from '../../services/SwapiService';

import { PersonList, PlanetList, StarshipList } from '../sw-components';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components';
import {SwapiProvider} from '../swapiContext';

export default class App extends React.Component {
  swapi = new SwapiService();

  render() {
  
    return (
      <ErrorBoundry>
        <SwapiProvider value={this.swapi}>
          <div>
            <Header />
            <RandomPlanet />
            {/* <PeoplePage /> */}

            <PersonList />
            <PersonDetails itemId={11}/>
          
            <PlanetList />
            <PlanetDetails itemId={5}/>

            <StarshipList />
            <StarshipDetails itemId={10}/>
          </div>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
};
