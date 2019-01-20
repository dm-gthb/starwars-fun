import React from 'react';
import './ItemList.css';
import SwapiService from '../../services/SwapiService';
import {withData} from '../hoc-helpers';

const ItemList = (props) => {
  const {data, onItemSelected} = props;

  const items = data.map((item) => {
    const asideInfo = props.children(item)

    return (
      <li 
        className="list-group-item"
        key={item.id}
        onClick={() => onItemSelected(item.id)}>{asideInfo}</li>
    )
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
