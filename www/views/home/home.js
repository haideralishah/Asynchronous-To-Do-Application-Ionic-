/**
 * Created by haider on 11/9/2015.
 */

angular.module('ionicToDo')
  .controller("homeController", function($scope, task){

    $scope.taskref = task;

    $scope.deleteTask = function (val) {
      console.log(val);
      console.log($scope.taskref);
      var remId = $scope.taskref.$getRecord(val);
      $scope.taskref.$remove(remId);
    };



  });
