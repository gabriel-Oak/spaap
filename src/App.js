import React, { Component } from "react";
import Header from './componentes/Header';
import Main from './componentes/Main';
import Footer from './componentes/Footer';

class App extends Component {
  
  render() {
    return (
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;