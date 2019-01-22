import React from 'react';
import { StarshipList} from '../sw-components';
import { StarshipDetails } from '../sw-components';
import ErrorIndicator from '../ErrorIndicator';
import Row from '../Row';

export default class StarshipsPage extends React.Component {
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
        left={<StarshipList onItemSelected={this.onItemSelected}/>}
        right={<StarshipDetails itemId={this.state.selectedItem}/>} />
    );
  }
}
