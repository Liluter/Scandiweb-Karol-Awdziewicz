import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Query} from '@apollo/client/react/components'
import {gql} from '@apollo/client'
import './styles/Index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

const CATEGORIES = gql`
query TakeProducts {
  categories {
    name
    products {
      name
    }
  }
}
`;

// client
//   .query({query: CATEGORIES})
//   .then(res => console.log(res))
// console.log(client)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
        {/* <Query query={CATEGORIES}>
          {({loading, data})=>{
            if(loading) return "Loading...";
            const { categories } = data;
            return categories.map((cat,index) => <h1 key={index}>{cat.name}</h1>)
          }}
        </Query> */}
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
