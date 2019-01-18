import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import './App.css';

export default class App extends React.Component {

  state = {
    selectedPersonId: null
  }

  onSelectedPerson = (id) => {
    this.setState({
      selectedPersonId: id
    })
  }

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onSelectedPerson={this.onSelectedPerson}/>
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPersonId={this.state.selectedPersonId}/>
          </div>
        </div>
      </div>
    );
  }
};
