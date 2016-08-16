'use strict';
var services = angular.module('myCiti.services');

(function() {
    services.factory('ServicesService', servicesService);
    servicesService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];

    function servicesService($firebaseArray, $firebaseObject, firebaseDataService) {
        var service = {
            getServiceCategories: getServiceCategories,
            getServices: getServices,
            getServiceDetails: getServiceDetails
        };
        return service;

        ////////////////
        function getServiceCategories() {
            var serviceCategories=[];
            var res = $firebaseArray(firebaseDataService.services);
            res.$loaded().then(function() {                
                    // To iterate the key/value pairs of the object, use angular.forEach()
                    angular.forEach(res, function(value, key) {
                        console.log(key, value);
                        var category=new Object();
                        category.id=value.$id;
                        category.title=value.title?value.title:value.$id;
                        serviceCategories.push(category);                                                
                    });
                });
            return serviceCategories;
        }

        function getServices(serviceName) {
            try {
                console.log('service is '+ serviceName);   
                var res = $firebaseObject(firebaseDataService.services + '/' +serviceName);
                // res.once('value', function(snap) {
                //   console.log('messages in range',snap.val());
                //     });
                    
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
            
            }
        }

        function getServiceDetails(serviceName) {
            try {
                var res = $firebaseObject(firebaseDataService.services.orderByChild("name").equalTo(serviceName));
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

            }
        }
    }
})();