exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
    reduceString: function(str, amount) {
        var st = '';
        var substr = '';
        for (var i = 0; i < str.length - 1; i++) {
            substr += str[i];
            if (str[i + 1] !== str[i]) {
                if (substr.length > amount) {
                    substr = substr.substring(0, amount);
                }
                st += substr;
                substr = '';
            }
            if (i === str.length - 2) {
                if (substr.length > amount) {
                    substr = substr.substring(0, amount);
                }
                st += substr;
            }
        }
        return st;
    },

    wordWrap: function(str, cols) {
        var parts = str.split(' ');
        var subst = parts[0];
        for (var i = 1; i < parts.length; i++) {
            if (parts[i].length > cols) {
                subst += '\n' + parts[i];
            } else {
                if (subst.length + parts[i].length > cols) {
                    subst += '\n' + parts[i];
                } else {
                    subst += ' ' + parts[i];
                }
            }
        }
        return subst;
    },

    reverseString: function(str) {
        var st = '';
        for (var i = str.length - 1; i >= 0; i--) {
            st += str[i];
        }
        return st;
    }
};