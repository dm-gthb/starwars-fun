import React from 'react';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import ItemRecord from '../ItemRecord';

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
        <ItemDetails 
          itemId={this.state.selectedPersonId}
          getData={this.swapi.getPerson}
          getImageURL={this.swapi.getPersonImage}>
          <ItemRecord field="gender" label="Gender"/>
          <ItemRecord field="eyeColor" label="Eye Color"/>
        
        </ItemDetails> 
      </ErrorBoundry>
    );
  
    return (
      <Row left={itemList} right={personDetails} />
    );
  }
};
