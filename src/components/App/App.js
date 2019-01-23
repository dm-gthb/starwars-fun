import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from '../pages';
import SwapiService from '../../services/SwapiService';
import {SwapiProvider} from '../swapiContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {StarshipDetails} from '../sw-components';
import './App.css';

export default class App extends React.Component {
  swapi = new SwapiService();

  state = {
    isLoggedIn: false
  };

  toggleLogin = () => {
    this.setState((state) => {
      return {
        isLoggedIn: !state.isLoggedIn
      }
    }) 
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiProvider value={this.swapi}>
          <Router>
            <div>
              <Header />
              <RandomPlanet />
              <Switch>
                <Route 
                  path="/" 
                  render={() => <h2>Welcome to StarDB</h2>} 
                  exact />
                <Route path="/people/:id?" component={PeoplePage}/>
                <Route path="/planets" component={PlanetsPage}/>
                <Route path="/starships" component={StarshipsPage} exact/>
                <Route path="/starships/:id" 
                  render={({match}) => {
                    return <StarshipDetails itemId={match.params.id}/>
                  }} />
                <Route 
                  path="/login" 
                  render={() => 
                    <LoginPage 
                      isLoggedIn={this.state.isLoggedIn} 
                      toggleLogin={this.toggleLogin}/>} />
                <Route 
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={this.state.isLoggedIn}/>} />
                <Route render={() => <p>Page not found</p>} />
              </Switch>
            </div>
          </Router>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
};
