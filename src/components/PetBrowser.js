import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {



  render() {
    const getPets = this.props.pets.map(pet =>
      <Pet
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
      />
    )
    return (
      <div className="ui cards">
        {getPets}
      </div>
    );
  }
}

export default PetBrowser;
