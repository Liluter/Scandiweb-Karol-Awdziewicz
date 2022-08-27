import React, { Component } from 'react'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import '../styles/DropDownCur.scss';

const CURRENCIES = gql`
query getCurrenciesList{
  currencies{
    label
    symbol
  }
}
`

export class DropDownCur extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='dropDownCur'>
        <Query query={CURRENCIES} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { currencies } = data;
            return (<>{currencies.map((curr,index) => <div key={index} onClick={()=> this.props.changeCurrency(curr.symbol)} className="dropDownCur-row"><span className='dropDownCur-row__cell'>{curr.symbol+ ' '+curr.label}</span></div>)}</>)
          }}
        </Query>
      </div>
    )
  }
}

export default DropDownCur