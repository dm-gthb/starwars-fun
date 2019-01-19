import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import './App.css';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import SwapiService from '../../services/SwapiService';

export default class App extends React.Component {

  swapi = new SwapiService();

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              onItemSelected={this.onSelectedItem}
              getData={this.swapi.getAllPlanets}/>
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItemId={this.state.selectedItemId}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              onItemSelected={this.onSelectedItem}
              getData={this.swapi.getAllStarships}/>
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItemId={this.state.selectedItemId}/>
          </div>
        </div>

      </div>
    );
  }
};
