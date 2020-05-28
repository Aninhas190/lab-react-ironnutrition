import React, { Component } from 'react';

import Media from 'react-bootstrap/Media';
//import Form from 'react-bootstrap/Form';

class MealBox extends Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   meal: [this.props]
    // };
  //}

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const meal = this.props;
    return (
      <>
        <Media>
          <img src={meal.image} alt={meal.name} className="img-thumbnail mr-3 mw-25 border-0" style={{maxWidth: '10em'}}/>
          <Media.Body>
            <h5 className="mt-0 mb-1">{meal.name}</h5>
            <small>{meal.calories} cal</small>
            <form className="form row align-self-center" onSubmit={this.handleSubmit}>
              <input className="form control col-9" type="number"/>
              <button className="btn btn-primary col-3" >+</button>
            </form>
          </Media.Body>
        </Media> 
      </>
    );
  }
}

export default MealBox;
