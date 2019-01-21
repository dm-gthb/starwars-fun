import React from 'react';
import ItemDetails from '../ItemDetails';
import ItemRecord from '../ItemRecord';
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
        <ItemRecord field="gender" label="Gender"/>
        <ItemRecord field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPerson,
    getImageURL: swapi.getPersonImage
  }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
