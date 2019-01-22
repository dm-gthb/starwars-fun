import React from 'react';
import { PlanetList} from '../sw-components';
import { PlanetDetails } from '../sw-components';
import ErrorIndicator from '../ErrorIndicator';
import Row from '../Row';

export default class PlanetPage extends React.Component {
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
        left={<PlanetList onItemSelected={this.onItemSelected}/>}
        right={<PlanetDetails itemId={this.state.selectedItem}/>} />
    );
  }
}
