exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
    listFiles: function(data, dirName) {
        var files = [];
        var dirs = [];

        function recur(data) {
            dirs.push(data.dir);
            for (var i = 0; i < data.files.length; i++) {
                if (typeof data.files[i] === 'string') {
                    if (typeof dirName === 'undefined' || dirs.indexOf(dirName) !== -1) {
                        files.push(data.files[i]);
                    }
                } else {
                    recur(data.files[i]);
                }
            }
            dirs.pop();
        }
        recur(data);
        return files;
    },

    permute: function(arr) {

    },

    fibonacci: function(n) {
        function fib(m) {
            if (m < 2) {
                return m;
            } else {
                return fib(m - 1) + fib(m - 2);
            }
        }
        return fib(n);
    },

    validParentheses: function(n) {
        var resp = [];

        function calc(left, right, str) {
            if (left === 0 && right === 0) {
                resp.push(str);
            }
            if (left > right) {
                return false;
            }
            if (left > 0) {
                calc(left - 1, right, str + '(');
            }
            if (right > 0) {
                calc(left, right - 1, str + ')')
            }
        }
        calc(n, n, resp);
        return resp;

    }
};