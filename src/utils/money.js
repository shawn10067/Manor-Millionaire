const numeral = require("numeral");

const toMoneyString = (cash) => {
  return numeral(cash).format("0,0");
};

const makeMillion = (cash) => {
  return Number.parseFloat(cash.toPrecision(2));
};

module.exports = {
  toMoneyString,
  makeMillion,
};
