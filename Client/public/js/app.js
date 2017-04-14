var app = angular.module('template', ['ui.router','ui.bootstrap', 'chat', 'luegg.directives'])

.constant('config', {
    rltm: {
        service: "pubnub",
        config: {
            "publishKey": "demo",
            "subscribeKey": "demo"
        }
    }
});

