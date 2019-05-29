// numeral.js locale configuration
// locale : korean
// author : teppeis : https://github.com/teppeis

(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../numeral'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('../numeral'));
  } else {
    factory(global.numeral);
  }
})(this, function(numeral) {
  numeral.register('locale', 'kr', {
    delimiters: {
      thousands: ',',
      decimal: '.',
    },
    abbreviations: {
      thousand: '천',
      million: '백만',
      billion: '십억',
      trillion: '조',
    },
    ordinal: function(number) {
      return '.';
    },
    currency: {
      symbol: '‎₩',
    },
  });
});
