import React from 'react';
import { faGit, faGitlab, faAngular, faReact, faJsSquare, faGulp, faCss3, faNode, faAws, faJenkins, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Skills.scss';

export default () => {
  return (
    <main className="skills-container">
      <p className="skills-text">
        Here you can see some of my knowdledges! I've been practicing day and night and trying to apply them in as many projects as I could.
      </p>
      <div className="skills-set">
        <FontAwesomeIcon icon={faGit} />
        <FontAwesomeIcon icon={faGitlab} />
        <FontAwesomeIcon icon={faJsSquare} />
        <FontAwesomeIcon icon={faAngular} />
        <FontAwesomeIcon icon={faNode} />
        <FontAwesomeIcon icon={faSass} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faGulp} />
        <FontAwesomeIcon icon={faJenkins} />
        <FontAwesomeIcon icon={faAws} />
      </div>
    </main>
  )
}