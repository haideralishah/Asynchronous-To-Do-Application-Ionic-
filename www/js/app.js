// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicToDo', ["ionic", "firebase"])

  .factory("Auth", function($firebaseAuth) {
    var usersRef = new Firebase("https//haileetodo.firebaseio.com/");
    return $firebaseAuth(usersRef);
  })

  .factory("task", function($firebaseArray, Auth, $rootScope) {
    itemsRef = new Firebase("https//haileetodo.firebaseio.com/" + $rootScope.authData.uid);
    return $firebaseArray(itemsRef);
  })
 /* .factory("ref", function($firebaseArray, Auth, $rootScope, task) {
    itemsRef = new Firebase("https//haileetodo.firebaseio.com/" + $rootScope.authData.uid);
    return itemsRef;
  })*/

  .controller("indexController", function($scope, $rootScope, Auth, $location){
    $rootScope.hideLogoutButton = true;
    $rootScope.unAuth = function() {
      Auth.$unauth();
      $rootScope.hideLogoutButton = true;
      $rootScope.authData = null;
      $location.path('/oathPage');

    }

  })




  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('addTask', {
        url: '/addTask',
        controller: 'addTaskController',
        templateUrl: 'views/addTask/addTask.html'
      })
      .state('home', {
        url: '/home',
        controller: 'homeController',
        templateUrl: 'views/home/home.html'
      })
      .state('taskDetails', {
        url: '/taskDetails/:partyID',
        controller: 'taskDetailsController',
        templateUrl: 'views/taskDetails/taskDetails.html'
      })
      .state('editTask', {
        url: '/editTask/:partyID',
        controller: 'editTaskController',
        templateUrl: 'views/editTask/editTask.html'
      })
      .state('oathPage', {
        url: '/oathPage',
        controller: 'oathPageController',
        templateUrl: 'views/oathPage/oathPage.html'
      })
    ;
    $urlRouterProvider
      .otherwise('/home');})











.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
