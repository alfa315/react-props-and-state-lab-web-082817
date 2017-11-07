import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  componentWillMount() {
    this.onFindPetsClick();
  }

  onFindPetsClick = () => {
    let site = '/api/pets'
    if(this.state.filters.type !== 'all'){
      site = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(site)
      .then(response => response.json())
      .then(json => this.setState({
        pets: json
    }))
  }

  handleChange = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event
      }
    })
  }

  onAdoptPet = (pet) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, pet]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChange} filters={this.state.filters} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
