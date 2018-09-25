import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputSearch from './InputSearch';
import InputSearch from './InputResults';
import InputSearch from './InputSaved';

var logger = require("morgan");
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
var db = require('./models');

// use database Article

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger('dev'));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static('public'));
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapDB";


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {

  useMongoClient: true

});




// Class Component
class App extends Component {
  state = {
    searchTopic: '',
    title: '',
    date: '',
    url: ''
  };


  searchArticle = (event) => {
    event.preventDefault(); // disable reload function
    const value = this.state.searchTopic; // grab value
    const value = this.state.startYear; // grab value
    const value = this.state.endYear; // grab value

    fetch('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=88d479d1630f4e798f8368e746b3b8fe' + value)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data: ', data);

        this.setState({
          title,
          date,
          url
        }); // update my state
      })
      .catch(() => {
        alert('Error occurs');
      });
  };

  onHandleChange = (event) => {
    const value = event.target.value; // value of the input
    this.setState({ searchValue: value });
  };

  render() {

    console.log('State: ', this.state);

    // JSX
    return (
      <div>
        <div className="App">
          {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to React</h1> */}
          {/* </header> */}
          {/* <p className="App-intro"> */}
          {/* To get started, edit <code>NYTApp</code> and save to reload. */}
          {/* </p> */}

        </div>


        <div>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4" >New York Times Article Scrubber</h1>
              <p class="lead">Search for and annotate articles of interest!</p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <InputSearch search />
      </div>


      <InputSearch searchArticle={this.searchArticle} onHandleChange={this.onHandleChange} />
      // <Image avatar_url={this.state.avatar_url} />
      <p>{this.state.headline}</p>

      <div>
        <InputResults />
      </div>

      <div>
        <InputSaved />
      </div>


  
    )

  };

  export default App;