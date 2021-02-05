exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
    valueAtBit: function(num, bit) {
        var bits = num.toString(2).padStart(8, '0');
        return parseInt(bits[bits.length - bit], 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        return num.toString(2).padStart(8, '0');
    },

    multiply: function(a, b) {
        var multipler = 1000000;
        a *= multipler;
        b *= multipler;
        return (a * b) / (multipler * multipler);
    }
};