'use strict';
var services = angular.module('myCiti.services');

(function () {
    services.factory('diningService', diningService);
    diningService.$inject = ['$firebase', '$firebaseArray', '$firebaseObject', 'firebaseDataService'];
    function diningService($firebase, $firebaseArray, $firebaseObject, firebaseDataService) {
        var service = {
            getRestuarents: getRestuarents,
            getRestuarentDetails: getRestuarentDetails,
            getData: getData
        };

        return service;

        function getRestuarents(subCategoryId) {

            // if (subCategoryId === null || subCategoryId === 0)
            //     subCategoryId = 1;
            // //Get restaurant mapping
            var restaurantsIds = $firebaseArray(firebaseDataService+dining_mapping.child('/' + subCategoryId));
            // to take an action after the data loads, use the $loaded() promise
            // restaurantsIds.$loaded().then(function () {        
            //     console.log("loaded record:", restaurantsIds.$id, restaurantsIds.name);
            //     // To iterate the key/value pairs of the object, use angular.forEach()

            // });
            return restaurantsIds;
        }

        function getRestuarentDetails(restaurantId) {
            debugger;
            var restaurant = $firebaseObject(firebaseDataService.dining.child('/' + restaurantId));
            return restaurant;
        }

        function getData(subCategoryId) {
            var restList = [];
            var list = $firebaseArray(firebaseDataService.dining_mapping.child('/' + subCategoryId));
            list.$loaded().then(function () {
                angular.forEach(list, function (value, key) {
console.log('key -'+ key);
console.log('value-' + value );
                    var r = $firebaseObject(firebaseDataService.dining.child('/' + value.$id));
                    r.$loaded().then(function () {
                        restList.push(r);
                    })
                });
            })
            return restList;
        }


        // function getData1(subCategoryId) {
        //     var restaurants = [];
        //     var list = [];
        //     firebaseDataService.dining_mapping.child('/' + subCategoryId).on("value", function (snapshot) {
        //         var data = snapshot.val();
        //         debugger;
        //         for (var key in data) {
        //             if (data.hasOwnProperty(key)) {
        //                 list.push({
        //                     id: key,
        //                     name: data[key]
        //                 })
        //             }
        //         }
        //     });

        //     list.forEach(function (rest) {
        //         firebaseDataService.dining.child('/' + rest.id).on("value", function (snapshot1) {
        //             var data1 = snapshot1.val();
        //             restaurants.push(data1);
        //         });
        //     }, this);
        //     return restaurants;
        // }
    }



    //    services.factory('DiningService', function() {
    //     return {
    //         getRestuarents: function(diningCategory) {
    //             var dining = [];
    //             for (var i = 0; i < diningData.length; i++) {
    //                 if (diningData[i].subCategory == diningCategory) {
    //                     dining.push(diningData[i]);
    //                 }
    //             }
    //             return dining;
    //         },
    //         getRestuarentDetails: function(restaurantId) {
    //             for (var i = 0; i < diningData.length; i++) {
    //                 if (diningData[i].name == restaurantId) {
    //                     return diningData[i];
    //                 }
    //             }
    //             return null;
    //         }
    //     };
    // }); 
})();


var diningData = [{
    id: 1,
    mainCategory: 'dining',
    subCategory: 'fastFood',
    name: 'McDonalds',
    mainImageUrl: '',
    location: {
        address: '31',
        floor: 'F1',
        other: 'Near to Elevators'
    },
    veg: true,
    nonVeg: false,
    cuisines: ['FastFood'],
    cost: '',
    tags: ['Burgers', 'Fast Food', 'Ice Cream', 'Nuggets', 'American'],
    timings: {
        from: '10:00',
        to: '23:00'
    }
}, {
        id: 2,
        mainCategory: 'dining',
        subCategory: 'buffet',
        name: 'BarbequeNation',
        mainImageUrl: '',
        location: {
            address: '34',
            floor: 'F4',
            other: ''
        },
        veg: true,
        nonVeg: true,
        cuisines: ['North Indian food', 'Italian'],
        cost: '1200 for 2',
        tags: ['Indian', 'North Indian', 'Buffet', 'lunch', 'dinner'],
        timings: [{
            from: '12:00',
            to: '16:00'
        }, {
                from: '18:30',
                to: '00:00'
            }]
    }, {
        id: 3,
        mainCategory: 'dining',
        subCategory: 'buffet',
        name: 'MotiMehal',
        mainImageUrl: '',
        location: {
            address: '39',
            floor: 'F4',
            Other: 'On Corner'
        },
        veg: true,
        nonVeg: false,
        cuisines: ['North Indian food'],
        cost: '',
        tags: ['Indian', 'North Indian', 'fine dining', 'lunch', 'dinner'],
        openingHours: [{
            from: '12:00',
            to: '16:00'
        }, {
                from: '18:30',
                to: '23:00'
            }]
    },];
