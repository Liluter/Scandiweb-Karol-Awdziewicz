import React, { Component } from 'react'

import '../styles/VariantBlock.scss'

export class VariantBlock extends Component {
  render() {
    return (
      <aside className='productDesc__block'>
              <h1 className='productDesc__block--header'></h1>
              <h2 className='productDesc__block--name'></h2>

              {/* new element */}
              <div className='productDesc__block--variantSize'>
                <div className='variantSize__label'>SIZE:</div>
                <div className='variantSize__options'>
                  <button className='variantSize__options--Btn'>XS</button>
                  <button className='variantSize__options--Btn'>S</button>
                  <button className='variantSize__options--Btn'>M</button>
                  <button className='variantSize__options--Btn'>L</button>
                </div>
              </div>

              <div className='productDesc__block--variantColor'>
                <div className='variantColor__label'>COLOR:</div>
                <div className='variantColor__options'>
                  <button className='variantColor__options--Btn'></button>
                  <button className='variantColor__options--Btn'></button>
                  <button className='variantColor__options--Btn'></button>
                </div>
              </div>

              <div className='productDesc__block--price'>
                <div className='price__label'>PRICE:</div>
                <div className='price__amount'>
                  $50.00
                </div>
              </div>

              <button className='productDesc__block--button'>
                ADD TO CART
              </button>

              <footer className='productDesc__block--footer'>
                <p>
                Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                </p>
              </footer>
              
            </aside>
    )
  }
}

export default VariantBlock
