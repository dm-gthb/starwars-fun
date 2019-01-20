import React from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';

export default class PeoplePage extends React.Component {

  swapi = new SwapiService();

  state = {
    selectedPersonId: null,
  };

  onSelectedPerson = (id) => {
    this.setState({
      selectedPersonId: id
    });
  };

  render() {
    const itemList = (
      <ItemList 
        onItemSelected={this.onSelectedPerson}
        getData={this.swapi.getAllPeople}>
          {(i) => (`${i.name} (${i.birthYear})`)}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails selectedPersonId={this.state.selectedPersonId}/>
      </ErrorBoundry>
    );
  
    return (
      <Row left={itemList} right={personDetails} />
    );
  }
};
