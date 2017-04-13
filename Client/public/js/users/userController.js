app.controller("userController", function($scope, userService,$stateParams){

    $scope.nbUser = 0;
    $scope.email="";
   if(  $stateParams.obj != null  && $stateParams.obj.email != null) {
      $scope.email = $stateParams.obj.email;
   }

    userService.getNbUser()
        .then(function(result){
            $scope.nbUser = result;
        });
    
})