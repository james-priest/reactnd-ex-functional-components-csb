import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { users, usersWhoLikedMovie, movieInfo } = this.props;
    return (
      <div className="PopularMovies-cell" key={movieInfo.id}>
        <h3>{movieInfo.name}</h3>
        {!usersWhoLikedMovie || usersWhoLikedMovie === 0 ? (
          <p>None of the </p>
        ) : (
          <div>
            <p>Liked by:</p>
            <ul>
              {usersWhoLikedMovie &&
                usersWhoLikedMovie.map(userID => (
                  <li key={userID}>{users[userID].name}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default MovieCard;
