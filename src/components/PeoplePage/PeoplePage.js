import React from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/SwapiService';

export default class PeoplePage extends React.Component {

  swapi = new SwapiService();

  state = {
    selectedPersonId: null,
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onSelectedPerson = (id) => {
    this.setState({
      selectedPersonId: id
    })
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
            onItemSelected={this.onSelectedPerson}
            getData={this.swapi.getAllPeople}
            renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}/>
        </div>
        <div className="col-md-6">
          <PersonDetails selectedPersonId={this.state.selectedPersonId}/>
        </div>
      </div>
    );
  }
};
