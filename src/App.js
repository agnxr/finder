import React from 'react';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Yelp from './util/Yelp';
import logo from './logo.png';

/*
const business = {

  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
];
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location,sortBy){

    //console.log(`Searching ${term} in location: ${location}, sorted by: ${sortBy}`);
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render(){
    return (
      <div className="App">
        <div className="hero">
          <img className="logo" alt="Finder" src={logo}/>
          <h1>Finder</h1>
        </div>
        <div>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={this.state.businesses}/>
        </div>
      </div>
    );
  }
}

export default App;
