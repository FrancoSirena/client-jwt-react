import React from 'react';
import '../styles/Home.scss';
import AboutMe from './AboutMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }
  handleClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }
  render = () => (
    <div>
      Simple React APP with JWT authentication. My backend was written using Node.js and MongoDB.
      { this.state.isVisible ? 
        <div className="overlay">
          <div className="about-me">
            <FontAwesomeIcon className="about-close" onClick={this.handleClick} icon={faPowerOff} />
            <AboutMe />
          </div>
        </div>
      : '' }
      <footer className="footer" onClick={this.handleClick}>
        <small> Franco Sirena </small>
      </footer>
    </div>
  )
}

export default Home;