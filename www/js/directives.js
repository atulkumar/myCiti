'use strict'
var myCitiModule1 = angular.module('myCiti.controllers');

myCitiModule1.directive("merchant", function() {
     return {
        restrict: 'E',
        scope: {           
            name:'@',
            email:'@',
            logo:'@',
            address1:'@',
            address2:'@',
            lat:'@',
            lng:'@',
            phone1:'@',
            phone2:'@'
        },
        template: '<div class="card"><div class="item"><h2>{{name}}</h2><p><i class="fa fa-map-marker"></i>  {{address1}}</p><p>{{address2}}</p><p><i class="fa fa-phone"></i>  {{phone1}}, {{phone2}}</p><p><i class="fa fa-envelope"></i>  {{email}}</p></div>'
    }
})