var app = angular.module('template', ['ui.router','ui.bootstrap', 'chat'])

.constant( 'config', {
    //
    // Get your PubNub API Keys in the link above.
    //
    "pubnub": {
        "publish-key"   : "pub-c-044711dd-ba53-4ed7-8104-a959a793f330",
        "subscribe-key" : "sub-c-b2b80310-2050-11e7-a9ec-0619f8945a4f"
    }
    // secret key : sec-c-ODc0MzI0Y2ItMzM2Ny00YzQzLTg5MDctYmRkMTJjY2ZjMThl
});
