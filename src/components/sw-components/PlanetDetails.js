import React from 'react';
import ItemDetails from '../ItemDetails';
import ItemRecord from '../ItemRecord';
import {withSwapiService} from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
        <ItemRecord field="population" label="population"/>
        <ItemRecord field="rotationPeriod" label="Rotation Period"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPlanet,
    getImageURL: swapi.getPlanetImage
  }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
