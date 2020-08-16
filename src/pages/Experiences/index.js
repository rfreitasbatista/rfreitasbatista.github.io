import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as data from '../../data/data';
import './style.css';
import Header from '../../components/Header';
import Vertical from '../../components/VerticalTimeline';

class Experiences extends React.Component {
  render() {
    return (
      <div className="father-container d-flex">
        <Header />
        <Vertical />
      </div>
    );
  }
}

export default Experiences;
