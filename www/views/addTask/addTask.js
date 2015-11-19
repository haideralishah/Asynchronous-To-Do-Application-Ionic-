/**
 * Created by haider on 11/9/2015.
 */


angular.module('ionicToDo')
  .controller("addTaskController", function($scope, task){
    $scope.taskref = task;
    //console.log($scope.taskref.userName);
    //console.log(task);
    $scope.addItem = function (val) {
      //console.log(val);
      $scope.taskref.$add({
        taskTitle : val.taskTitle,
        taskDesc : val.desc,
        datePerform : val.datePerform,
        statusTask : val.statusTask,
        taskRefrence : val.taskRefrence
      });
    };




  });
