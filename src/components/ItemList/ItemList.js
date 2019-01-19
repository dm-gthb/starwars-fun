import React, { Component } from 'react';
import './ItemList.css';
import Spinner from '../Spinner';

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    const {getData} = this.props;
    getData()
      .then((itemList) => {
        this.setState({
          itemList
        })
      });
  }

  render() {
    const {itemList} = this.state;
    if (!this.state.itemList) {
      return <Spinner />;
    }
    
    const items = itemList.map((item) => {
      return (
        <li 
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onSelectedPerson(item.id)}>
          {item.name}</li>
      )
    });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
