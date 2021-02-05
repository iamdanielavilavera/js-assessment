exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak: function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function(str) {
        return function(params) {
            return str + ', ' + params;
        }
    },

    makeClosures: function(arr, fn) {
        var resp = [];
        var otherfn = function(val) {
            return function() {
                return fn(val);
            }
        };
        for (var i = 0; i < arr.length; i++) {
            resp.push(otherfn(arr[i]));
        }
        return resp;
    },

    partial: function(fn, str1, str2) {
        return function(param) {
            return fn(str1, str2, param);
        };
    },

    useArguments: function() {
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    },

    callIt: function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, args);
    },

    partialUsingArguments: function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
            var call = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, call);
        };
    },

    curryIt: function(fn) {

    }
};