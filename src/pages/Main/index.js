import React from 'react';
import Typist from 'react-typist';
import './style.css';
import '../../../node_modules/react-typist/dist/Typist.css';
import * as writer from '../../data/data';
import Header from '../../components/Header';

class Main extends React.Component {
  render() {
    return (
      <div className='father-container d-flex'>
        <Header />
        <div className="container-fluid d-flex flex-column align-items-center main">
          <p className="title">Rodrigo Freitas Batista</p>

          <Typist avgTypingDelay={30} cursor={writer.cursor}>
            {writer.text.map((each) => (
              <div className="d-inline">
                <div className="d-inline subtitle">{each}</div>
                {each !== 'Welcome to my portfolio!' ? (
                  <div className="d-inline">
                    <Typist.Delay ms={1900} />
                    <Typist.Backspace count={each.length} delay={100} />
                  </div>
                ) : (
                  0
                )}
              </div>
            ))}
          </Typist>

          <Typist
            avgTypingDelay={30}
            cursor={writer.cursor3}
            className="phrase0 text-center"
          >
            <Typist.Delay ms={14000} />
            <div className="d-inline subtitle">{`Check out my Projects`}</div>
            <br />
          </Typist>
          <Typist
            avgTypingDelay={1}
            cursor={writer.cursor2}
            className="phrase0 text-center"
          >
            <Typist.Delay ms={1200} />
            <div className="d-inline">{`<Agronomist />`}</div>
            <br />
            <Typist.Delay ms={3300} />
            <div className="d-inline">{`<Full Stack Development Student />`}</div>
            <br />
            <Typist.Delay ms={3900} />
            <div className="d-inline">{`<Front End Development Student />`}</div>
          </Typist>
        </div>
      </div>
    );
  }
}

export default Main;
