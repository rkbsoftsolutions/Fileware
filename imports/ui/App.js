import React, { Component } from 'react'
import Home from './pages/home';


class App extends Component {

  render() {
    return (
      <div className="app-root">
        <div className="container">
          <Home/>
          {this.props.content}
        </div>
      </div>
    );

  }

}

export default App;

