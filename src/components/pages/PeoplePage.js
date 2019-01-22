import React from 'react';
import { PersonList} from '../sw-components';
import { PersonDetails } from '../sw-components';
import ErrorIndicator from '../ErrorIndicator';
import Row from '../Row';

export default class PeoplePage extends React.Component {
  state = {
    selectedItem: null,
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    
    return (
      <Row 
        left={<PersonList onItemSelected={this.onItemSelected}/>}
        right={<PersonDetails itemId={this.state.selectedItem}/>} />
    );
  }
}
