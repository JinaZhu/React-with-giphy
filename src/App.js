import React from 'react';
import $ from "jquery"
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    gifs: []
  }

  fetchGifs() {
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wkW1B4BR0fsNO7LFjglv4GffzOpU4pPk&limit=5");
    xhr.done((data) => {
      // arrow functions do not bind the this keyword to the execution context
      // when you define a arrow function this will maintain its value at the global scope
      // this is reference to the execution context
      console.log(data)
      this.setState({gifs: data.data}) 
    });

  }
  // a component must return JXS
  // JXS = html and javascript(stuff you can see)
  // {name} =interpolation
      // like jinja {{}}
  //lifecycle are called automatic
    componentDidMount() {
      // only run once
      this.fetchGifs()
      //this is a reference to the class itself. Like a self 
    }
  render(){
//render is called by itself
    console.log(this.state.gifs)
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learning how to query the Giphy API!!
        </p>
          {this.state.gifs.map((gif) => {
            return <img src={gif.images.downsized_medium.url}/>
          })}
      </header>
    </div>
  );
}
}

export default App;
