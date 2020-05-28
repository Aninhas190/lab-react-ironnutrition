import React, { Component } from 'react';
import './App.scss';

import meals from './meals';


import MealBox from './components/MealBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      addNewMeal: false,
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState ={
      addNewMeal: !this.state.addNewMeal
    }
  }

  render() {
    const listOfMeals = [...meals];
    return (
      <div>
        <button onSubmit={this.handleSubmit}>Add New Meal</button>
        {(this.state.addNewMeal && 
          <form action="">
            <label htmlFor="name-input">Name</label>
            <input type="text" id="name-input"/>
            <label htmlFor="calories-input">Number of Calories</label>
            <input type="number" id="calories-input"/>
            <label htmlFor="image-image">Image</label>
            <input type="file" id="image-input"/>
          </form>
        )}
        {listOfMeals.map(meal => {
          return ( <MealBox key={meal.name} {...meal} />)
        })}
      </div>
    );
  }
}

export default App;
                      