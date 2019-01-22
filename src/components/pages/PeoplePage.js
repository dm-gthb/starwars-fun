import React from 'react';
import {withRouter} from 'react-router-dom';
import { PersonList} from '../sw-components';
import { PersonDetails } from '../sw-components';
import Row from '../Row';

const PeoplePage = ({match, history}) => {
  return (
    <Row 
      left={<PersonList onItemSelected={(id) => history.push(id)}/>}
      right={<PersonDetails itemId={match.params.id} />} />
  );
};

export default withRouter(PeoplePage);
