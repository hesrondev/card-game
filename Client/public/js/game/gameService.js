app.factory('GameService', function ($rootScope) {
    var socket = io.connect('http://10.75.2.255:3000');
    return {
        on: function (eventName, callback) {

            socket.on(eventName, function () {

                console.log('Received ' + eventName);

                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {

            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});
