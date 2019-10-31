import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import image from "./zerochass.PNG";

const ChirpTop = () => {
  return (
    <div className="chirp-top">
      {/* The left side containing the profile picture, display name, and username */}
      <div className="left-box">
        <img src={image} className="profile-pic" />
        <div className="user-area">
          <p className="display-name">Zerochass</p>
          <p className="username">@zerochass</p>
        </div>
      </div>

      {/* The right side containing the Follow button */}
      <button
        className="follow-btn"
        onClick={() => {
          alert("Now following Zerochass!");
        }}
      >
        Follow
      </button>
    </div>
  );
};

const ChirpMiddle = () => {
  // Using the new Date() call, we create a Date object and get a nice looking date string
  const currentDate = new Date().toLocaleDateString("en-US");

  return (
    <div className="chirp-middle">
      <p>An obligatory "Hello world!" tweet!</p>

      {/* Display our current date */}
      <p className="date">
        {currentDate}
        {" - "}
        <a className="source" href="http://zerochass.io">
          Chirper Web App
        </a>
      </p>
    </div>
  );
};

const ChirpBottom = () => {
  return (
    <div className="chirp-bottom">
      <div className="activity-area">
        <i className="fas fa-signal" />
        <p>View Chirp activity</p>
      </div>

      {/* Display the social action buttons */}
      <div className="buttons-area">
        <i className="far fa-comment" />
        <i className="fas fa-retweet" />
        <i className="far fa-heart" />
        <i className="fas fa-share-square" />
      </div>
    </div>
  );
};

/** Our Chirp component is just one component made up of the Chirp Top,
 *  Middle, and Bottom components. Think legos! */
const Chirp = () => {
  return (
    <div className="chirp">
      <ChirpTop />
      <ChirpMiddle />
      <ChirpBottom />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Chirper</h1>
      <Chirp />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
