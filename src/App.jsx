import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Stephen Ben',
      bio: 'An Ibibio man passionate about coding and music.',
      imgSrc: './ben.JPG',
      profession: 'Software Engineer',
    },
    shows: false,
    mountedTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <button onClick={this.toggleShow}>
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.shows && (
          <div style={{ marginTop: '20px' }}>
            <img
              src={this.state.person.imgSrc}
              alt="Profile"
              style={{ borderRadius: '50%', width: '150px', height: '150px' }}
            />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p><strong>Profession:</strong> {this.state.person.profession}</p>
          </div>
        )}
        <p>Component mounted for: {this.state.mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
