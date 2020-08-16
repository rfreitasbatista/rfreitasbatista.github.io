import React from 'react';
import Project from '../../components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import * as writer from '../../data/data';
import Header from '../../components/Header'

class Projects extends React.Component {
  render() {
    return (
      <div className="father-container d-flex">
        <Header />
        <div className="d-flex justify-content-around col-10 container-fluid projects flex-wrap">
          {writer.projetos.map((projeto) => (
            <Project
              key={projeto.id}
              src={projeto.colored}
              name={projeto.name}
              description={projeto.description}
              id={projeto.id}
              features={projeto.features}
              link={projeto.link}
              underC={projeto.underC}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
