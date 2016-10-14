(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController)
    .filter('emptyCheck', EmptyCheckFilter);

    LunchCheckController.$inject = ['$scope', 'emptyCheckFilter'];

    function LunchCheckController($scope, emptyCheckFilter) {
        $scope.lunchItems = '';
        $scope.msg = "";
        $scope.isEmpty= true;

        $scope.checkIfTooMuch = function () {
            var lunchItems = $scope.lunchItems.split(",");
            lunchItems = emptyCheckFilter(lunchItems);
            if (lunchItems.length == 0) {
                $scope.isEmpty = true;
                $scope.msg = "Please enter data first";
            }
            else {
                $scope.isEmpty = false;                
                if (lunchItems.length > 3) {
                    $scope.msg = "Too much!";
                }
                else {
                    $scope.msg = "Enjoy!";
                }
            }          
        }
    }
    function EmptyCheckFilter() {
        return function (input) {
          return  input.filter(function (e) { return e });
        };
    }
})()