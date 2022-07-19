import numeral from "numeral";

export const toMoneyString = (cash) => {
  return numeral(cash).format("0,0");
};
