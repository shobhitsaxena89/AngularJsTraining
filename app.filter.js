var myApp = angular.module('myApp');

myApp.filter('customName', [function(){
    return function(value, greeting){        
        return greeting.toUpperCase() + "  " + value.substr(0,2).toUpperCase();
    };
}]);