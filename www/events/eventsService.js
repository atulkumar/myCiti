'use strict';
var services1 = angular.module('myCiti.services');

(function() {
    services.factory('EventsService', eventsService);
    eventsService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];

    function eventsService($firebaseArray, $firebaseObject, firebaseDataService) {

        var service = {
            getEvents: getEvents,
            getEvent: getEvent
        };

        return service;

        function getEvents() {
            var events = $firebaseArray(firebaseDataService.events.orderByChild("isPublished").startAt(true));
            console.log('all events' + events);
            return events;
        }

        function getEvent(eventName) {
            try {
                var res = $firebaseObject(firebaseDataService.events.orderByChild("name").equalTo(eventName));

                // to take an action after the data loads, use the $loaded() promise
                res.$loaded().then(function() {
                    console.log("loaded record:", res.$id, res.name);                   
                    console.log(res);
                    // To iterate the key/value pairs of the object, use angular.forEach()
                    angular.forEach(res, function(value, key) {                                                
                        console.log(key, value);
                    });
                });                
                return res;
            } catch (error) {
                //alert(error);
            }
        }
    }
})();