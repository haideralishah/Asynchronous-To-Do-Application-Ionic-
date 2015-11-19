angular.module('ionicToDo')
  .controller("taskDetailsController", function($scope, $stateParams, task){

    $scope.taskref = task;
    $scope.id = $stateParams.partyID;
    console.log($scope.id );
    $scope.taskDetails = $scope.taskref.$getRecord($scope.id);
    console.log($scope.taskDetails);



  });
