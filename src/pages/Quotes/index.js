import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { FaTwitter } from '../../../node_modules/react-icons/fa'

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
];

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      colorIndex: 0,
    };
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quotes: data.quotes,
          index: Math.round(Math.random() * 100),
        });
      });
  }

  newQuote() {
    this.setState({
      index: Math.round(Math.random() * 100),
      colorIndex: Math.round(Math.random() * 11),
    });
  }

  render() {
    const twitter = 'https://twitter.com/intent/tweet';
    const { quotes, index, colorIndex } = this.state;
    const style = {
      backgroundColor: colors[colorIndex],
      color: 'white',
      transition: 
      'background-color 1s'
    };
    const letterStyle = {
      color: colors[colorIndex],
      transition: 
      'color 1s'
    };
    if (!quotes) return <h2>Loading</h2>;

    return (
      <div className='wrapper animate' style={style}>
        <div id="quote-box" className="App" style={letterStyle}>
          <h4 id="text">{quotes[index].quote}</h4>
          <p id="author">{quotes[index].author}</p>
          <button
            className="btn button-position"
            id="new-quote"
            onClick={this.newQuote}
            style={style}
          >
            New Quote
          </button>
          <a
            id="tweet-quote"
            className="btn twitter-button-position"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            style={style}
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    );
  }
}

export default Quotes;
