import React, { Component } from 'react';
import './PersonDetails.css';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

export default class PersonDetails extends Component {
  
  swapi = new SwapiService(); 

  state = {
    person: null,
    loading: false
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
      this.setState({
        loading: true
      })
  
      this.swapi.getPerson(this.props.selectedPersonId)
        .then((person) => {
          this.setState({
            person,
            loading: false
          })
        })
    }
  }

  render() {
    if (!this.state.person) {
      return <p>Select person from the list</p>
    }
    
    const content = this.state.loading ? <Spinner/> : <PersonCard personData={this.state.person}/>;
    
    return (
      <div className="person-details card">
        {content}
      </div>
    );
  }
}

const PersonCard = ({personData}) => {
  const {id, name, gender, birthYear, eyeColor} = personData;
  return (
    <React.Fragment>
      <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name}/>
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
