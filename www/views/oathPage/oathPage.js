/**
 * Created by haider on 11/10/2015.
 */

angular.module('ionicToDo')
  .controller("oathPageController", function($scope, $location, Auth, $rootScope){
    $scope.login = function() {
      Auth.$authWithOAuthRedirect("facebook")
      .then(function(authData) {
        // User successfully logged in

      })
        .catch(function(error) {
        if (error.code === "TRANSPORT_UNAVAILABLE") {
          Auth.$authWithOAuthPopup("facebook")
            .then(function(authData) {
            // User successfully logged in. We can log to the console
            // since we’re using a popup here
            console.log(authData);
          });
        } else {
          // Another error occurred
          console.log(error);
        }
      });
    };
    Auth.$onAuth(function(authData) {
      if (authData === null) {
        console.log("Not logged in yet");
      } else {
        console.log("Logged in as", authData.uid);
        console.log(authData);
        $location.path('/home');
        $rootScope.hideLogoutButton = false;
      }
      $rootScope.authData = authData; // This will display the user's name in our view

    });
    //$rootScope.hideLogoutButton = true;


    /*$scope.allImages = {
      'src' : 'img/logo.jpg'
    };*/



});
