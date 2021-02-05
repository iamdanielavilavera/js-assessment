exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
    containsNumber: function(str) {
        var regex = /\d/i;
        return regex.test(str);
    },

    containsRepeatingLetter: function(str) {
        var regex = /([A-Za-z]+)\1/i;
        return regex.test(str);
    },

    endsWithVowel: function(str) {
        var regex = /[aeiou]$/i;
        return regex.test(str);
    },

    captureThreeNumbers: function(str) {
        var regex = /\d{3}/i;
        var execute = regex.exec(str);
        return execute ? execute[0] : false;
    },

    matchesPattern: function(str) {
        var regex = /^\d{3}-\d{3}-\d{4}$/i;
        return regex.test(str);
    },

    isUSD: function(str) {
        var regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/i;
        return regex.test(str);
    }
};