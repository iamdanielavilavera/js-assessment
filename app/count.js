exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function(start, end) {
        var interval = setInterval(() => {
            if (start <= end) {
                console.log(start++);
            }
        }, 100);

        return {
            cancel: function() {
                clearInterval(interval);
            }
        };

    }
};