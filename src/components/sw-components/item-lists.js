import React from 'react';
import SwapiService from '../../services/SwapiService';
import {withData} from '../hoc-helpers';
import ItemList from '../ItemList';

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{`${name} (${model})`}</span>;

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderNameAndModel), getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
