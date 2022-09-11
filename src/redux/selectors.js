import { currencyNumber } from "../utils/currencyNumber";

export const getShop = store => store.shop ;
export const getCart = store => store.shop.ItemsByIds ;
export const getCartItemNumber = store => ( Object.keys(getCart(store)).length > 0 ? Object.entries(store.shop.ItemsByIds).map((e,i)=> e[1].count  ).reduce((p,c)=> (p + c) ) : 0 )
export const getCurrentCurrency = store => store.shop.currentCurrency;
export const getCurrentCurrencyLabel = store => store.shop.currentCurrencyLabel;
export const getCurrentPrices = store => Object.entries(store.shop.ItemsByIds).map((e,i)=> e[1].product.prices[getCurrNumber(store)].amount * e[1].count  ) ;
export const getCurrNumber = store => currencyNumber(store.shop.currentCurrency) ;
export const getTotalAmount = store =>  ( Object.keys(getCart(store)).length > 0 ? getCurrentPrices(store).reduce((p,c)=> (p + c) ).toFixed(2) : 0 );
export const getTaxAmount = store => (( Object.keys(getCart(store)).length > 0 ?  getCurrentPrices(store).reduce((p,c)=> (p + c)) : 0 )*0.21).toFixed(2);
