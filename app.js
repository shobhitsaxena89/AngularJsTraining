var myApp = angular.module('myApp', []); // for creating/ins a module
myApp.controller('MyController',['$scope', function($scope){
    $scope.myval= "Hello";
    $scope.onClick = function()
    {
        alert('clicked'); 
        alert($scope.myval);
        $scope.myval="some new value"
    }
 }]);

// myApp.controller('MyController',['$scope', 'AppService', 
// function(abc, AppService)
// {
//     // moved to service
// //    abc.students =[{
// //        name: 'Shobhit',
// //        age: 29
// //    },
// //    {
// //        name: 'Eli',
// //        age: 29
// //    }];

// //abc.getStudents = AppService.getStudents();
// AppService.getStudents()
//     .then(function(result){
//         abc.selectedStudent = student;
//     });
//    abc.onViewBtnClick = function(student){
//     abc.selectedStudent = student;
//    }


//  }],);


myApp.controller('MyController', ['$scope', 'AppService', 
function(abc, AppService){
    AppService.getStudents()
        .then(function(result){
            abc.getStudents = result.data;
        });

        abc.onViewBtnClick = function(student){
            abc.selectedStudent = student;
        }
    }]);


console.log(myApp);