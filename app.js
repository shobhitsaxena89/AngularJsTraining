var myApp = angular.module('myApp', ['ui.router']); // for creating/instantiate a module
myApp.config(['$stateProvider','$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
    name: 'home',
    url: '/home',
    //template: '<div>This is the home page</div>'
    component: 'home'
    });
    $stateProvider.state({
        name: 'about',
        url: '/about',
        //template: '<div>This is the about page</div>'     
        component: 'about'   
    });
    //$urlRouterProvider.otherwise('/home');
}]);

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
            //abc.getStudents = result.data;             
            abc.getStudents = result;
        });

        abc.onViewBtnClick = function(student){
            abc.selectedStudent = student;
        }
    }]);


console.log(myApp);