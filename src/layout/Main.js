import React, { Component } from "react";
import { Loader } from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (cinema, type) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=329ffa13&s=${cinema}${
        type !== "all" ? `&type=${type}` : " "
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    return (
      <div className="container content">
        <Search searchMovie={this.searchMovies} />
        {this.state.loading ? (
          <Loader/>
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    );
  }
}
