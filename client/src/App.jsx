// src/App.jsx
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',  
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
