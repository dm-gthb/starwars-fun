import React, { Component } from 'react';
import './ItemList.css';
import Spinner from '../Spinner';

class ItemList extends Component {

  render() {
    const {data} = this.props;
    const items = data.map((item) => {
      const asideInfo = this.props.children(item);

      return (
        <li 
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}>{asideInfo}</li>
      )
    });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

const f = () => {
  return class extends Component {
    state = {
      data: null
    };
  
    componentDidMount() {
      const {getData} = this.props;
      getData()
        .then((data) => {
          this.setState({
            data
          })
        });
    }

    render() {
      const {data} = this.state;
      if (!data) {
        return <Spinner />;
      }
      return <ItemList {...this.props} data={data}/>;
    }
  };
};

export default f();
