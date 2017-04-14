app.controller("loginController", function($scope, userService,$state){
    $scope.login=function(){
       if( userService.login($scope.email,$scope.email) )
       {
          $state.go("app.user",{obj:{email:$scope.email}})    
        }else{
            $state.go("app.login",{email:$scope.email})     
        }
    };
  
})

