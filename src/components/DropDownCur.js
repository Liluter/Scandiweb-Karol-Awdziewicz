import React, { Component } from 'react'
import {gql} from '@apollo/client'
import {Query} from '@apollo/client/react/components'
import '../styles/DropDownCur.scss';

import { connect } from 'react-redux';  
import { toggleCurrency } from '../redux/action' // action dispaych

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
    this.currSignToStore = this.currSignToStore.bind(this)
  }

  // componentDidMount(){
  //   console.log('Dropdown mount',this.props);
    
  // }
  // componentWillUnmount(){
  //   console.log('Dropdown unmount props',this.props);
    
  // }

  // to redux
  currSignToStore = (payload) => {
    this.props.toggleCurrency(payload)
  }

  render() {
    return (
      <div className='dropDownCur'>
        <Query query={CURRENCIES} >
          {({loading, data})=>{
            if (loading) return "Loading...";
            const { currencies } = data;
            return (<>{currencies.map((curr,index) => <div key={index} onClick={()=> {  this.currSignToStore(curr.symbol)  }} className="dropDownCur-row"><span className='dropDownCur-row__cell'>{curr.symbol+ ' '+curr.label}</span></div>)}</>)
          }}
        </Query>
      </div>
    )
  }
}

export default connect(null, { toggleCurrency})(DropDownCur)
