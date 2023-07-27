import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    
    fetch(" http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      })
      .catch((error) => console.error("Error fetching gifs:", error));
  }

  handleSearchSubmit = (query) => {
    // For the sake of the example, we won't implement search in the local database
    console.log("Search submitted:", query);
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;