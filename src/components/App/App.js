import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import SwapiService from '../../services/SwapiService';
import {SwapiProvider} from '../swapiContext';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {StarshipDetails} from '../sw-components';
import './App.css';

export default class App extends React.Component {
  swapi = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiProvider value={this.swapi}>
          <Router>
            <div>
              <Header />
              <RandomPlanet />
              <Route 
                path="/" 
                render={() => <h2>Welcome to StarDB</h2>} 
                exact />
              <Route path="/people"  render={() => <h2>People</h2>} exact />
              <Route path="/people/:id?" component={PeoplePage}/>
              <Route path="/planets" component={PlanetsPage}/>
              <Route path="/starships" component={StarshipsPage} exact/>

              <Route path="/starships/:id" 
                render={({match}) => {
                  return <StarshipDetails itemId={match.params.id}/>
                }} />

            </div>
          </Router>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
};
