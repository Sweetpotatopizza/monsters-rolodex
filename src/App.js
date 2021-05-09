import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    // Call constructor on the Component class
    super();

    this.state = {
      monsters: [
        // {
        //   name: "Frankenstein",
        //   id: "asc1",
        // },
      ],
      searchField: "",
    };
  }

  //LifeCycleMethod
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      //taking response and converting into json format which JS can understand
      .then((response) => response.json())
      //update state monsters property with this new array of users
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  // if state is updated, re-render the JS component with new state
  /* Without setState, you are not allowed to change the state  */
  render() {
    //Destructuring extracts multiple data from array or obj
    //Pulling off the value off our state and settting them into const
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="search monsters"
          //onChange is SyntheticEvent detect whenever DOM event happen
          onChange={(e) => {
            //setState is async, so it doesn't callback immediately
            // if we want do something right after setState, we have to do it in second argument function
            this.setState({ searchField: e.target.value });
          }}
        /> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
