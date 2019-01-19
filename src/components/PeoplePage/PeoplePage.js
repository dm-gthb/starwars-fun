import React from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';

export default class PeoplePage extends React.Component {

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
          <ItemList onSelectedPerson={this.onSelectedPerson}/>
        </div>
        <div className="col-md-6">
          <PersonDetails selectedPersonId={this.state.selectedPersonId}/>
        </div>
      </div>
    );
  }
};
