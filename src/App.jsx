import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Ada Lovelace',
        bio: 'Mathematician and writer, recognized for her work on Charles Babbage’s early mechanical general-purpose computer.',
        imgSrc: 'https://tse1.mm.bing.net/th/id/OIP.oG0zfdXK7E7r-HcYWdqltwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
        profession: 'Computing Pioneer'
      },
      shows: false,
      secondsSinceMount: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    // Start counting seconds since mount
    this.intervalId = setInterval(() => {
      this.setState((prev) => ({ secondsSinceMount: prev.secondsSinceMount + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the interval
    if (this.intervalId) clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prev) => ({ shows: !prev.shows }));
  };

  render() {
    const { person, shows, secondsSinceMount } = this.state;

    return (
      <div className="container">
        <h1>React State Checkpoint</h1>

        <div className="timer">
          <strong>Seconds since component mounted:</strong> {secondsSinceMount}
        </div>

        <button className="toggle-btn" onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p><strong>Profession:</strong> {person.profession}</p>
            <p className="bio">{person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
