app.service('userService', function($q, $http) {

    this.getNbUser = function(){
        var defer = $q.defer();

        $http.get("js/users/user.json")
            .then(
                function(result){
                    defer.resolve(result.data.user);
                },
                function(result){
                    defer.reject(result.error);
                }
            ).finally(function(){

            });

        return defer.promise;
    }

    this.login= function(login,password){
        if(login == null || password == null) return false;
        else return true;

      }


});