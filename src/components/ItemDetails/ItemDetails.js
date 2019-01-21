import React, { Component } from 'react';
import './ItemDetails.css';
import Spinner from '../Spinner';

export default class ItemDetails extends Component { 
  state = {
    item: null,
    image: null,
    loading: false
  }

  componentDidMount() {
    this.updateItem();
  }

  updateItem() {
    const {itemId, getData, getImageURL} = this.props;

    if (!itemId) {
      return;
    }

    this.setState({
      loading: true
    })

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageURL(item),
          loading: false
        })
      })
  }
 
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item) {
      return <p>Select item from the list</p>
    }

    const renderItemCard = () => {
      const item = this.state.item;
      const image = this.state.image;
      
      return (
        <React.Fragment>
          <img className="item-image" src={image} alt={item.name}/>
          <div className="card-body">
            <h4>{item.name}</h4>
            <ul className="list-group list-group-flush">
              {
                React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, {item});
                })
              }
            </ul>
          </div>
        </React.Fragment>
      );
    };
    
    const content = this.state.loading ? <Spinner/> : renderItemCard();
    
    return (
      <div className="item-details card">
        {content}
      </div>
    );
  }
}
