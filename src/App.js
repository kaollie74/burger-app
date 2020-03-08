import React, { Component } from 'react';

// Components => stateless 
import Layout from "./components/Layout/Layout";

// Containers
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
