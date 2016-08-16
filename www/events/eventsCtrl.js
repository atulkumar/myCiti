'use strict';
var myCitiModule = angular.module('myCiti.controllers');

//EVENTS
myCitiModule.controller('EventsCtrl', function($scope, $stateParams, EventsService) {
    var getEvents = function getEvents() {
        var events = EventsService.getEvents();               
        if (angular.isDefined(events))
            return events;
        return null;
    }
    $scope.events = getEvents();
});

//EVENT DETAILS
myCitiModule.controller('EventDetailsCtrl', function($scope, $stateParams,$ionicLoading, EventsService) {
    var getEventDetails = function(eventId) {  
        var events= EventsService.getEvent(eventId);        
        console.log('res is ' + events);      
         if (angular.isDefined(events))
            return events;
        return null;
    };
    var event1 = getEventDetails($stateParams.eventId);
    $scope.event=event1;
    console.log('event is' + event1);     
    
    // $scope.showloading = function () {
	// 	$ionicLoading.show({
	// 		template: '<ion-spinner class="spinner-positive"></ion-spinner>'
	// 	});
	// 	$timeout(function () {
	// 		$ionicLoading.hide();
	// 	}, 5000);
	// };

});