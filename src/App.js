import React, { Component } from 'react';
import Tabs from './components/Tabs/Tabs';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import theme from './components/theme';

const client = new ApolloClient({
  uri: `https://83.220.238.159:3005/graphql`,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <Tabs />
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
