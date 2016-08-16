'use strict'
var services = angular.module('myCiti.services');

(function() {
    services.factory('MedicalService', medicalService);
    medicalService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];

    function medicalService($firebaseArray, $firebaseObject, firebaseDataService) {

        var service = {
            getHospitals: getHospitals,
            getHospitalDetails: getHospitalDetails
        };

        return service;

        function getHospitals(subCategoryId) {
            var hospitalList = [];
            var list = $firebaseArray(firebaseDataService.medical_mapping.child('/' + subCategoryId));
            list.$loaded().then(function() {
                angular.forEach(list, function(value, key) {
                    console.log('key -' + key);
                    console.log('value-' + value);
                    console.log('val is' + value.$id);
                    var r = $firebaseObject(firebaseDataService.medical.child('/' + value.$id));
                    r.$loaded().then(function() {
                        hospitalList.push(r);
                    })
                });
            });
            return hospitalList;
        }

        function getHospitalDetails(hospitalId) {
            var hospital = $firebaseObject(firebaseDataService.medical.child('/' + hospitalId));
            return hospital;
        }
    }
})();