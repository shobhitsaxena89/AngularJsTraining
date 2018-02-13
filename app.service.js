var myApp = angular.module('myApp'); // getting the module for whcih the instance is already created in app.js\
//this code is without Json. 
//myApp.service('AppService', [function(){
// var students = [
//     {
//         name: 'Shobhit',
//         age: 29
//     },
//     {
//         name: 'Eli',
//         age: 29
//     }
// ];
// this.getStudents = function()
// {
//     return students;
// }
// }]);

//with Json
myApp.service('AppService', ['$http', 
function($http){
    this.getStudents = function(){
        return $http.get('/students.json');
    }
}]);
