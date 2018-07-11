import React from 'react';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/PersonalInfo.scss';

const img = require('../../assets/picture.jpg');

class PersonalInfo extends React.Component {
  handleClick = () => {
    window.open("https://github.com/francosirena", "_blank");
  }
  render = () => (
    <div className="personal-info">
      <img alt="my picutre" src={img} className="info-picture" />
      <p>
        <FontAwesomeIcon icon={faPhone} />
        &nbsp; +351 912625401
      </p>
      <p>
        <FontAwesomeIcon icon={faAt} />
        &nbsp; fsirena@gmail.com
      </p>
      <p>
        <button type="button" className="info-button" onClick={this.handleClick}>
          <FontAwesomeIcon icon={faGithub} />
          &nbsp; FrancoSirena
        </button>
      </p>
    </div>
  )
}

export default PersonalInfo;