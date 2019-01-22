import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';

const ItemList = (props) => {
  const {data, onItemSelected, children} = props;

  const items = data.map((item) => {
    const asideInfo = children(item)

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

ItemList.defaultProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelected: PropTypes.func,
  children: PropTypes.func.isRequired
}

export default ItemList;
