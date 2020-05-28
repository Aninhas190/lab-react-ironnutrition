import React, { Component } from 'react';
import './App.scss';

import meals from './meals';


import MealBox from './components/MealBox';
import Search from './components/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      addNewMeal: false,
      foodItem: {
        name: '', calories: 0, image: ''
      },
      listOfMeals: [...meals]
    }
  }

  createMeal = () => {
    const negateAddNewMeal = !this.state.addNewMeal
    this.setState({
      addNewMeal: negateAddNewMeal
    })  
  }


  handleInputChange = event => {
    console.log(event.target)
    const { value, name } = event.target;

    this.setState({
      foodItem : {...this.state.foodItem, [name]: value}
    });
    console.log(this.state.foodItem);
  }

  
  handleSubmit = (event) => {
    event.preventDefault();
    const negateAddNewMeal = !this.state.addNewMeal
    const foodItem = this.state.foodItem;
    console.log(foodItem);
    this.setState({
      addNewMeal: negateAddNewMeal,
      foodItem: '',
      listOfMeals: [...this.state.listOfMeals, foodItem]
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.createMeal}>Add New Meal</button>
        <Search />
        {(this.state.addNewMeal && 
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name-input">Name
             <input type="text" id="name-input" value={this.state.foodItem.name} name="name" onChange={this.handleInputChange} required/>
            </label>
            <label htmlFor="number-input">Calories
            <input type="number" id="number-input" name="calories" value={this.state.foodItem.calories} onChange={this.handleInputChange} required/>
            </label>
            <label htmlFor="image-input">Image Url
            <input type="url" id="image-input" name="image" onChange={this.handleInputChange} value={this.state.foodItem.image}/>
            </label>
            <button>Submit meal</button>
          </form>
        )}
        {this.state.listOfMeals.map(meal => {
          return ( <MealBox key={meal.name} {...meal} />)
        })}
      </div>
    );
  }
}

export default App;
                      