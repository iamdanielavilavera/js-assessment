exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum: function(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    },

    remove: function(arr, item) {
        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                temp.push(arr[i]);
            }
        }
        return temp;
    },

    removeWithoutCopy: function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function(arr) {
        arr.pop();
        return arr;
    },

    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function(arr) {
        arr.shift(arr);
        return arr;
    },

    concat: function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function(arr, item) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates: function(arr) {
        var dupla = [];
        dupla.push({
            value: arr[0],
            count: 1
        });
        for (var i = 1; i < arr.length; i++) {
            var exist = false;
            for (var j = 0; j < dupla.length; j++) {
                if (dupla[j].value === arr[i]) {
                    exist = true;
                    dupla[j].count++;
                    break;
                }
            }
            if (!exist) {
                dupla.push({
                    value: arr[i],
                    count: 1
                });
            }
        }
        var resp = [];
        for (var i = 0; i < dupla.length; i++) {
            if (dupla[i].count > 1) {
                resp.push(dupla[i].value);
            }
        }
        return resp;



    },

    square: function(arr) {
        var resp = [];
        for (var i = 0; i < arr.length; i++) {
            resp.push(arr[i] * arr[i]);
        }
        return resp;
    },

    findAllOccurrences: function(arr, target) {
        var resp = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                resp.push(i);
            }
        }
        return resp;
    }
};