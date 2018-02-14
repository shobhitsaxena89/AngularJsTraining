var myApp = angular.module('myApp');
myApp.component('studentDetails', { 
    //template: '<div>Student Details</div>'
    templateUrl: 'student-details.tpl.html',
    bindings : {
      myTitle: '@' , //string value
      //myList: '<' // it means we are passing property whcih can be an object or string
      currentStudent: '<'
    },
    controllerAs: 'vm',
    controller: ['$element', function($element){
        //console.log($element);// $element is giving <div> from student details template.
        // it's not a native element rather it's a jquerry wrapped element (if not jquerry then angular has jqlite) 
        $element.css("color", "red") // not a good 
        this.myname = 'custom component'
    }]
});


myApp.component('home', {
    template: '<div>This is the home page</div>'
});

myApp.component('about', {
    template: '<div>This is the about page</div>'
});