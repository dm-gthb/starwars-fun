import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true,
    hasError: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(() => {
      this.updatePlanet();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlanet() {
    const planetId = Math.floor(Math.random() * 15) + 5;
    this.swapi.getPlanet(planetId)
      .then((planet) => {
        this.setState({
          planet,
          loading: false,
          error: false
        })
      })
      .catch(() => {
        this.setState({
          hasError: true,
          loading: false
        })
      })
  }

  render() {
    const hasData = !this.state.loading && !this.state.hasError;
    const errorMessage = this.state.hasError ? <ErrorIndicator/> : null;
    const loading = this.state.loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView data={this.state.planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
       {errorMessage}
       {loading}
       {content}
      </div>
    );
  }
};

const PlanetView = ({data}) => {
  const {id, name, population, rotationPeriod, diameter} = data;
  return (
    <React.Fragment>
      <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
