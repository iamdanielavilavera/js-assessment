exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function(value) {
        var deferred = $.Deferred();
        setTimeout(() => {
            deferred.resolve(value);
        }, 1000);
        return deferred.promise();
    },

    manipulateRemoteData: function(url) {
        var deferred = $.Deferred();
        $.ajax(url).then(function(resp) {
            var elements = [];
            for (var item of resp.people) {
                elements.push(item.name);
            }
            deferred.resolve(elements.sort());
        });
        return deferred.promise();
    }
};