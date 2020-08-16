import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Badges from '../Badges';

class Project extends React.Component {
  render() {
    const { src, name, description, id, features, link, underC } = this.props;
    return (
      <a
        className="card project-card d-flex"
        id={id}
        selected={id}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card-img-top project-img"
          src={src}
          selected={id}
          alt={name}
        />
        <div
          className="card-body text-center d-flex flex-column justify-content-between"
          selected={id}
        >
          <h5 className="card-title" selected={id}>
            {name}
          </h5>
          <p className="card-text" selected={id}>
            {description}
          </p>
          <Badges features={features} id={id} className="align-self-end" />
        </div>
      </a>
    );
  }
}

export default Project;
