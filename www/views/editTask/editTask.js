/**
 * Created by haider on 11/9/2015.
 */
angular.module('ionicToDo')
  .controller("editTaskController", function($scope, $stateParams, task){
    $scope.taskref = task;
    $scope.id = $stateParams.partyID;
    console.log($scope.id );
    $scope.taskToEdit = $scope.taskref.$getRecord($scope.id);
    console.log($scope.taskToEdit);
    $scope.updateEditTask = function (editedTask) {
      console.log(editedTask);

      var refToEditedTask = $scope.taskref;

      refToEditedTask.$save(editedTask);

        /*.then(function(ref) {
          //ref.key() === refToEditedTask.$id;
      });*/


    };
  });
