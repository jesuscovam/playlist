import React, { Component } from "react";

class Playlist extends Component {
  state = {
    songs: ["Song 1", "Song 2", "Song 3"]
  };
  render() {
    const songs = this.state.songs.map(song => <li>{song}</li>);
    const PlaylistStyles = {
      listStyleType: "none"
    };

    return (
      <div style={{ width: "25%", display: "inline-block" }}>
        <img src="" alt="" />
        <h3>Playlist Name</h3>
        <ul style={PlaylistStyles}>{songs}</ul>
      </div>
    );
  }
}

export default Playlist;
