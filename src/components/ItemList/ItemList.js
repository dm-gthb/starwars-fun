import React, { Component } from 'react';
import './ItemList.css';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

export default class ItemList extends Component {

  state = {
    peopleList: null
  };

  swapi = new SwapiService();

  componentDidMount() {
    this.uploadPeople();
  }

  uploadPeople() {
    this.swapi.getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      });
  }

  render() {
    const {peopleList} = this.state;
    if (!this.state.peopleList) {
      return <Spinner />;
    }
    
    const people = peopleList.map((person) => {
      return (
        <li 
          className="list-group-item"
          key={person.id}
          onClick={() => this.props.onSelectedPerson(person.id)}>
          {person.name}</li>
      )
    });

    return (
      <ul className="item-list list-group">
        {people}
      </ul>
    );
  }
}
