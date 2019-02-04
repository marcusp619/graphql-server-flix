import React from 'react';
import { render } from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: "https://server-bn0xzhztw.now.sh"
})

client
  .query({
    query: gql`
      {
        movies {
          title
        }
      }
    `
  })
  .then(result => console.log(result));

const router = (
  <BrowserRouter>
      <App />
  </BrowserRouter>
);

render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
