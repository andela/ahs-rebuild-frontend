import React, { Component } from 'react';
import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';
import './App.scss';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Routes/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
