import React, { Component } from 'react'
import {gql,useQuery} from '@apollo/client'


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

const withHook = (Component) => {
  return  (props) => {
    const {loading, error, data} = useQuery(CATEGORIES);
    return <Component {...props} loading={loading} error={error} data={data} />;
  }
}


export class Newer extends Component {


componentDidMount = async () => {
  
  console.log('mount',this.props)
}
componentDidUpdate = async () => {
  console.log('update',this.props.data.categories)
}


  render() {
    return (
      <div>
      {this.props.data?.categories?.map((cat, index)=>(<div key={index}>{index}{' '}{cat.name}</div>))}
      </div>
    )
  }
}

export default withHook(Newer)

// With HOC witHook resolve query and useQuery hook 