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
myApp.service('AppService', ['$http', '$q',
function($http, $q){
    this.getStudents = function(){
        var defer = $q.defer();
        var httpPromise =  $http.get('/students.json');
        httpPromise.then(function(result){
            var students = result.data.map(function(item){
                item.seniority = item.age > 10? "senior" : "junior";
                return item;
    });
    defer.resolve(students);
});

return defer.promise;
}}]);
    
