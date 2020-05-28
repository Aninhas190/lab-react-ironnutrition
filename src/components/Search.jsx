import React, {Component} from 'react';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
    }
  }

  render() {
    return (
      <>
        <label htmlFor="search">Search by name</label>
        <input id="seach" type="text" value={this.props.inputValue} onChange={this.props.foodFilterOnChange} />
      </>
    )
  }
}


export default Search;