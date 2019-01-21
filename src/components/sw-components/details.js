import React from 'react';
import SwapiService from '../../services/SwapiService';
import ItemDetails from '../ItemDetails';
import ItemRecord from '../ItemRecord';

const { getPerson, getPersonImage, getPlanet, getPlanetImage, getStarship, getStarshipImage } = new SwapiService();

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageURL={getPersonImage}>
        <ItemRecord field="gender" label="Gender"/>
        <ItemRecord field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  )
};

const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageURL={getPlanetImage}>
        <ItemRecord field="population" label="population"/>
        <ItemRecord field="rotationPeriod" label="Rotation Period"/>
    </ItemDetails>
  )
};

const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageURL={getStarshipImage}>
        <ItemRecord field="model" label="Model" />
        <ItemRecord field="length" label="Length" />
        <ItemRecord field="costInCredits" label="Cost" />
    </ItemDetails>
  )
};

export { 
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};

