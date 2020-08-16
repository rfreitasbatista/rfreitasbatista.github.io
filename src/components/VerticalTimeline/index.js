import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css';

class Academic extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column col-10'> 
        <div className='d-flex'>
          <div className="card experience-card d-flex">
            <p>Work Experience</p>
          </div>
          <div className="card experience-card d-flex">
            <p>Internship Experience</p>
          </div>
        </div>
        <div className='d-flex'>
          <div className="card experience-card d-flex">
            <p>National Studies</p>
          </div>
          <div className="card experience-card d-flex">
            <p>International Studies</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Academic;
