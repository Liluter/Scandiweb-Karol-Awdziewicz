// Give us number of currency in database;
export const currencyNumber = (arg) => {
  let number;
switch (arg) {
  case "$":
    number = 0;
    break;
  case "£": 
    number = 1;
    break;
  case "A$": 
    number = 2;
    break; 
  case "¥":
    number = 3;
    break;
  case "₽":
    number = 4;
    break;
  default:
    break;
}
return number
}

