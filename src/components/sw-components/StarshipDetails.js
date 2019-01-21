import React from 'react';
import ItemDetails from '../ItemDetails';
import ItemRecord from '../ItemRecord';
import {withSwapiService} from '../hoc-helpers';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
        <ItemRecord field="model" label="Model" />
        <ItemRecord field="length" label="Length" />
        <ItemRecord field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getStarship,
    getImageURL: swapi.getStarshipImage
  }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
