import React from 'react';
import PersonalInfo from './my-info/PersonalInfo';
import Resume from './my-info/Resume';
import Skills from './my-info/Skills';
import '../styles/AboutMe.scss';
import Description from './my-info/Description';

class AboutMe extends React.Component {
  render = () => (
    <div className="about-me-container">
      <aside className="about-me-info">
        <PersonalInfo/>
      </aside>
      <main className="about-me-briefing">
        <Resume  />
      </main>
      <article className="about-me-skills">
        <Skills  />
      </article>
      <article className="about-me-description">
        <Description  />
      </article>
      <footer className="about-me-footer">
        Powered with GRID CSS
      </footer>
    </div>
  )
}

export default AboutMe;